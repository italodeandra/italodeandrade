import React, { FunctionComponent, MouseEventHandler, useEffect, useRef } from 'react'
import { Button, classNames, useLocalStorage, useMobile } from 'reactjs-library'
import Icon from '../Icon/Icon'
import './ApplicationBar.sass'

interface Props {
    isMenuOpen: boolean
    setMenuOpen: Function
}

interface Component extends FunctionComponent<Props> {
    Title: FunctionComponent<{
        onClick?: MouseEventHandler
        className?: string
    }>
}

const ApplicationBar: Component = ({
                                       children,
                                       isMenuOpen,
                                       setMenuOpen
                                   }) => {
    let ref = useRef<HTMLDivElement>(null)
    let [ width ] = useLocalStorage<number>('NavigationDrawer-Width', 8 * 30)
    let [ isMobile ] = useMobile()

    function handleMenuButtonClick() {
        setMenuOpen && setMenuOpen(!isMenuOpen)
    }

    useEffect(() => {
        if (ref.current && ref.current.parentNode) {
            (ref.current.parentNode as HTMLElement).classList.add('ApplicationBar-Parent')
        }
    })

    return (
        <div
            ref={ref}
            className={classNames(
                'ApplicationBar',
                isMenuOpen && 'menu-open'
            )}
            style={{ left: !isMobile && isMenuOpen ? width : null }}
        >
            <Button className='menu-button' onClick={handleMenuButtonClick}>
                <Icon name={isMenuOpen ? 'menu-open' : 'menu'}/>
            </Button>
            {children}
        </div>
    )
}

ApplicationBar.Title = ({
                            children,
                            onClick,
                            className
                        }) => (
    <div
        className={classNames('ApplicationBar-Title', className)}
        onClick={onClick}
    >{children}</div>
)

export default ApplicationBar
