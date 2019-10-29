import React, { FunctionComponent, MutableRefObject, useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import { Animate, usePortal } from 'reactjs-library'
import { AnimateStyle } from 'reactjs-library/components/Animate/Animate'
import './Tooltip.sass'

const { setTimeout, clearTimeout } = window

interface Props {
    title: string
    origin?: 'left' | 'right' | 'top'
    render: (ref: TooltipSetRef) => void
}

export type TooltipSetRef = (newRef: MutableRefObject<any>) => void

const Tooltip: FunctionComponent<Props> = ({
                                               title,
                                               origin,
                                               render
                                           }) => {
    let ref = useRef<HTMLElement | null>(null)
    let tooltipRef = useRef<HTMLDivElement | null>(null)
    let portalContainer = usePortal('Tooltip-Portal')
    let [ style, setStyle ] = useState<{ [key: string]: any } | undefined>()
    let [ show, setShow ] = useState<boolean>(false)
    let timerRef = useRef<number>()

    function handleMouseEnter() {
        clearTimeout(timerRef.current)
        timerRef.current = setTimeout(() => {
            setShow(true)
        }, 300)
    }

    function handleMouseLeave() {
        setShow(false)
        clearTimeout(timerRef.current)
    }

    useEffect(() => {
        let tooltipRef = ref.current

        if (tooltipRef) {
            tooltipRef.addEventListener('mouseenter', handleMouseEnter)
            tooltipRef.addEventListener('mouseleave', handleMouseLeave)
        }

        return () => {
            if (tooltipRef) {
                tooltipRef.removeEventListener('mouseenter', handleMouseEnter)
                tooltipRef.removeEventListener('mouseleave', handleMouseLeave)
            }
        }
    }, [])

    useEffect(() => {
        if (origin) {
            setTimeout(() => {
                if (show) {
                    let rect = ref.current!.getBoundingClientRect()
                    let rectTooltip = tooltipRef.current!.getBoundingClientRect()

                    let newStyle

                    switch (origin) {
                        case 'left':
                            newStyle = {
                                left: rect.left + rect.width + 8,
                                top: rect.top + (rect.height / 2) - (rectTooltip.height / 2)
                            }
                            break
                        case 'right':
                            newStyle = {
                                left: rect.left - rectTooltip.width - 8,
                                top: rect.top + (rect.height / 2) - (rectTooltip.height / 2)
                            }
                            break
                        case 'top':
                            newStyle = {
                                left: rect.left - (rectTooltip.width / 2) + (rect.width / 2),
                                top: rect.top + rect.height + 8
                            }
                            break
                    }

                    setStyle(newStyle)
                }
            })
        }
    }, [ show, origin ])

    function setRef(newRef: MutableRefObject<any>) {
        ref.current = newRef.current
    }

    return (
        <>
            {render(setRef)}

            {origin && createPortal(
                <Animate
                    type='fade'
                    show={show}
                    render={(animateStyle: AnimateStyle) =>
                        <div
                            ref={tooltipRef}
                            className='Tooltip'
                            style={{ ...style, ...animateStyle }}
                        >
                            {title}
                        </div>
                    }
                />
                , portalContainer)}
        </>
    )
}

export default Tooltip
