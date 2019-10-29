import React, { FunctionComponent } from 'react'
import './Icon.sass'
import accountCircle from './icons/account-circle'
import at from './icons/at'
import githubCircle from './icons/github-circle'
import home from './icons/home'
import homeOutline from './icons/home-outline'
import instagram from './icons/instagram'
import linkedinBox from './icons/linkedin-box'

import menu from './icons/menu'
import menuOpen from './icons/menu-open'
import puzzle from './icons/puzzle'
import stackOverflow from './icons/stack-overflow'
import web from './icons/web'

const icons: { [key: string]: Function } = {
    'account-circle': accountCircle,
    at,
    'github-circle': githubCircle,
    home,
    'home-outline': homeOutline,
    instagram,
    'linkedin-box': linkedinBox,
    menu,
    'menu-open': menuOpen,
    puzzle,
    'stack-overflow': stackOverflow,
    web
}

interface Props {
    name: string
}

const Icon: FunctionComponent<Props> = ({
                                            name
                                        }) => {
    return (
        <div className='Icon'>
            {icons[name]()}
        </div>
    )
}

export default Icon
