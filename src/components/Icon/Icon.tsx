import React, { FunctionComponent } from 'react'
import './Icon.sass'
import accountCircle from './icons/account-circle'
import at from './icons/at'
import briefcase from './icons/briefcase'
import codeTags from './icons/code-tags'
import githubCircle from './icons/github-circle'
import home from './icons/home'
import homeOutline from './icons/home-outline'
import instagram from './icons/instagram'
import lightbulb from './icons/lightbulb'
import linkedinBox from './icons/linkedin-box'
import menu from './icons/menu'
import menuOpen from './icons/menu-open'
import monitor from './icons/monitor'
import puzzle from './icons/puzzle'
import react from './icons/react'
import school from './icons/school'
import stackOverflow from './icons/stack-overflow'
import web from './icons/web'

const icons: { [key: string]: Function } = {
    'account-circle': accountCircle,
    at,
    briefcase,
    'code-tags': codeTags,
    'github-circle': githubCircle,
    home,
    'home-outline': homeOutline,
    instagram,
    lightbulb,
    'linkedin-box': linkedinBox,
    menu,
    'menu-open': menuOpen,
    monitor,
    puzzle,
    react,
    school,
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
