import React, { FunctionComponent } from 'react'
import { Icon, Text, Tooltip, TooltipSetRef } from 'reactjs-library'
import './ProfileSection.sass'

const ProfileSection: FunctionComponent = () => {
    let whereToFindMe = [
        { href: 'https://italodeandra.de', icon: 'web', here: true },
        { href: 'mailto:italodeandra@gmail.com', icon: 'at' },
        { href: 'https://github.com/italodeandra', icon: 'github-circle' },
        { href: 'https://stackoverflow.com/users/12038349/italodeandra', icon: 'stack-overflow' },
        { href: 'https://www.instagram.com/italodeandra/', icon: 'instagram' }
    ]

    let currentYear = new Date().getFullYear()
    let age = currentYear - 1997

    return (
        <div id='profile' className='Profile Section' tabIndex={1}>

            <Text paragraph select={false} className='profile-paragraph'>
                <div className='profile-picture'/>
                <div>
                    <Text paragraph bold>Ítalo Andrade</Text>
                    <Text paragraph>{age} years old / from Brazil</Text>
                    <Text paragraph>italodeandra@gmail.com</Text>
                    <Text paragraph className='show-on-print'>italodeandra.de</Text>
                </div>
            </Text>

            <Text header>Profile</Text>
            <Text paragraph justify>
                A very curious, enthusiastic, self-taught and challenge seeker. I love debugging code, fixing issues,
                learning a new framework or language to use on new situations and I'm very passionate about clean code.
                Liked being a leader on past experience and had the ability to lead teams to process and manage large
                volumes without compromising service or quality.
            </Text>

            <Text subheader select={false} className='hide-on-print'>Where to find me</Text>
            <Text paragraph className='hide-on-print'>
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

        </div>
    )
}

export default ProfileSection
