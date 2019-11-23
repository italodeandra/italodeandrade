import React, { FunctionComponent } from 'react'
import { classNames, Text, useMobile } from 'reactjs-library'
import ProjectsItem from './Item/ProjectsItem'
import './ProjectsSection.sass'

const ProjectsSection: FunctionComponent = () => {
    let [ isMobile ] = useMobile()

    let projects = [
        {
            name: 'react',
            title: 'ReactJS Library',
            period: { start: new Date('2019-10-07'), end: 'present' },
            location: 'reactjs-library.italodeandra.de',
            description: 'A ReactJS Library with my own design components, utils and hooks.'
        },
        {
            name: 'monitor',
            title: 'Trackfy',
            period: { start: new Date('2014-10-02'), end: new Date('2018-10-11') },
            location: '(disabled)',
            description: 'It was my first web app made with PHP, MySQL and jQuery. Made for people who wanted to be ' +
                'notified of new episodes for their favorite TV Show and to know which episode they already watched.'
        }
    ]

    return (
        <div id='projects' className='Projects Section' tabIndex={1}>
            <Text header>Projects</Text>
            <div className={classNames('projects', isMobile && 'is-mobile')}>
                {projects.map(p => (
                    <ProjectsItem
                        key={p.name}
                        name={p.name}
                        title={p.title}
                        period={p.period}
                        location={p.location}
                        description={p.description}
                    />
                ))}
            </div>
        </div>
    )
}

export default ProjectsSection
