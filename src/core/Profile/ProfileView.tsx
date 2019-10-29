import React, { FunctionComponent } from 'react'
import { Icon, TooltipSetRef } from 'reactjs-library'
import Text from '../../components/Text/Text'
import Tooltip from '../../components/Tooltip/Tooltip'
import useTitle from '../../hooks/useTitle'
import './ProfileView.sass'

const ProfileView: FunctionComponent = () => {
    useTitle('Ítalo Andrade')

    let whereToFindMe = [
        { href: 'https://italodeandra.de', icon: 'web', here: true },
        { href: 'mailto:italodeandra@gmail.com', icon: 'at' },
        { href: 'https://github.com/italodeandra', icon: 'github-circle' },
        { href: 'https://stackoverflow.com/users/12038349/italodeandra', icon: 'stack-overflow' },
        { href: 'https://www.instagram.com/italodeandra/', icon: 'instagram' }
    ]

    let currentYear = new Date().getFullYear()
    let age = currentYear - 1997
    let startedProgramming = currentYear - 2006

    return (
        <div className='Profile View'>
            <Text paragraph select={false} className='profile-paragraph'>
                <div className='profile-picture'/>
                <div>
                    <Text paragraph>Ítalo de Andrade</Text>
                    <Text paragraph>{age} years old</Text>
                    <Text paragraph>italodeandra@gmail.com</Text>
                    <Text paragraph italic style={{ color: '#989898' }}>other personal information on my actual
                        CV</Text>
                </div>
            </Text>
            <Text header>Profile</Text>
            <Text paragraph>
                A very curious, enthusiastic and challenge seeker. I love debugging code and
                fixing issues, learning a new framework or language to use on new situations. Liked being a leader on
                past experience and had the ability to lead teams to process and manage large volumes without
                compromising service or quality.
            </Text>
            <Text header select={false}>History</Text>
            <Text paragraph select={false}>
                I'm young but I've been programming for while. Got myself into programming {startedProgramming} years
                ago building PC Game Trainers for Cheats Forums with Delphi.
            </Text>
            <Text subheader select={false}>Where to find me</Text>
            <Text paragraph>
                {whereToFindMe.map(i => (<Tooltip
                    key={i.icon}
                    title={'You\'re here!'}
                    origin={i.here ? 'top' : undefined}
                    render={(setRef: TooltipSetRef) => <>
                        <a
                            className='link'
                            ref={ref => setRef({ current: ref })}
                            href={i.href}
                            target={i.href.includes('http') ? '_blank' : undefined}
                        >
                            <Icon name={i.icon}/>
                        </a>&nbsp;
                    </>}
                >
                </Tooltip>))}
            </Text>

            <Text header select={false}>How to use</Text>
            <Text paragraph select={false}>
                You install it with <Text italic bold select={false}>yarn</Text> or <Text italic bold
                                                                                          select={false}>npm</Text>:
            </Text>
            <Text codeblock select='all'>yarn add https://github.com/italodeandra/reactjs-library</Text>
            <Text paragraph select={false}>
                or
            </Text>
            <Text codeblock select='all'>npm install -s italodeandra/reactjs-library</Text>
            <Text paragraph select={false}>
                Then import it.
            </Text>
            <Text paragraph select={false}>
                Simple. Right?
            </Text>

            <Text header select={false}>Documentation</Text>
            <Text paragraph select={false}>
                You are here!
            </Text>

            <Text header select={false}>License</Text>
            <Text paragraph select={false}>
                <a href='http://opensource.org/licenses/MIT'>MIT</a>
            </Text>
            <Text paragraph select={false}>
                Copyright © 2019 Ítalo Andrade
            </Text>
            <br/>
        </div>
    )
}

export default ProfileView
