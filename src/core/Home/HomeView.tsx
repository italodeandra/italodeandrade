import React, { FunctionComponent } from 'react'
import { Icon, Text } from 'reactjs-library'
import useTitle from '../../hooks/useTitle'

const HomeView: FunctionComponent = () => {
    useTitle('Ítalo Andrade')

    let whereToFindMe = [
        { href: 'https://italodeandra.de', icon: 'web' },
        { href: 'mailto:italodeandra@gmail.com', icon: 'at' },
        { href: 'https://github.com/italodeandra', icon: 'github-circle' },
        { href: 'https://stackoverflow.com/users/12038349/italodeandra', icon: 'stack-overflow' },
        { href: 'https://www.instagram.com/italodeandra/', icon: 'instagram' }
    ]

    return (
        <div className='Home View'>
            <Text header select={false}>Introduction</Text>
            <Text paragraph select={false}>Hello.</Text>
            <Text paragraph select={false}>This is my own ReactJS Library.</Text>
            <Text paragraph select={false}>I hope you like it.</Text>

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
            <Text paragraph>
                {whereToFindMe.map(i => (<>
                    <a href={i.href} target={i.href.includes('http') ? '_blank' : undefined}>
                        <Icon name={i.icon}/>
                    </a>&nbsp;
                </>))}
            </Text>
        </div>
    )
}

export default HomeView
