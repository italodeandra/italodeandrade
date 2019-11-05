import React, { FunctionComponent, MouseEventHandler, MutableRefObject, ReactNode, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { classNames, Text } from 'reactjs-library'
import './ListItem.sass'

export interface ListItemProps {
    to?: string
    onClick?: MouseEventHandler
    icon?: ReactNode
    element?: any
    elementProps?: { [key: string]: any }
    setRef?: (ref: MutableRefObject<any>) => void
    className?: string
    tabIndex?: number
}

const ListItem: FunctionComponent<ListItemProps> = ({
                                                        children,
                                                        to,
                                                        onClick,
                                                        icon,
                                                        element,
                                                        elementProps,
                                                        setRef,
                                                        className,
                                                        tabIndex
                                                    }) => {
    let ref = useRef<any>()
    let Element = element || (!Boolean(to) ? NativeDiv : Link)

    let isClickable = to || onClick

    useEffect(() => {
        setRef && setRef(ref)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <Element
            className={classNames(
                'ListItem',
                isClickable && 'is-clickable',
                className
            )}
            to={to!}
            onClick={onClick}
            {...elementProps}
            ref={ref}
            tabIndex={tabIndex}
        >
            {icon}
            <Text ellipsis>{children}</Text>
        </Element>
    )
}

export default ListItem

const NativeDiv: FunctionComponent<ListItemProps> = ({ children, ...props }) => (
    <div {...props}>{children}</div>
)
