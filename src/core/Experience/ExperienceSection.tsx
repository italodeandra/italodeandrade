import React, { FunctionComponent } from 'react'
import { classNames, Text, useMobile } from 'reactjs-library'
import './ExperienceSection.sass'
import ExperienceItem from './Item/ExperienceItem'

const ExperienceSection: FunctionComponent = () => {
    let [ isMobile ] = useMobile()

    let experiences = [
        {
            name: 'luizalabs',
            title: 'Full Stack Developer at luizalabs',
            period: { start: new Date('2018-08-02'), end: 'present' },
            location: 'Franca, São Paulo, Brazil',
            description: 'Working with a multidisciplinary team focused on developing process automation solutions ' +
                'for a big brazilian retailer. Messing around on the back-end with Java (Spring Boot and JPA with ' +
                'MySQL) and NodeJS. Making sparkling things with ReactJS. Versioned with GitLab ' +
                '(also using GitLab CI). Guaranteed code quality with SonarQube. Following agile methodologies and ' +
                'designing how our apps should look.',
            projects: [
                {
                    year: 2019,
                    title: 'Reed',
                    description: 'System that all the company branches do their store inventory and the back-office ' +
                        'manages everything. I developed both front-end and back-end and designed the UI. Became a ' +
                        'ReactJS reference for using React Hooks.',
                    technologies: [
                        'ReactJS', 'React Hooks', 'TypeScript', 'Java', 'Spring Boot', 'JPA', 'JUnit', 'MySQL',
                        'Google Kubernetes Engine', 'Gitlab CI', 'Sonarqube'
                    ]
                },
                {
                    year: 2019,
                    title: 'Vulcan UI',
                    description: 'My own ReactJS UI Library based on Google\'s Material Design guidelines. My Labs ' +
                        'squad started using it on all of our projects. I developed most of the components.',
                    technologies: [ 'ReactJS', 'React Hooks', 'Material Design' ],
                    break: true
                },
                {
                    year: 2018,
                    title: 'Spock',
                    description: 'Bundle of workers and API\'s used on some of the company\'s business processes.',
                    technologies: [
                        'Java', 'Spring Boot', 'JPA', 'JUnit', 'MySQL', 'Google Kubernetes Engine', 'Gitlab CI',
                        'Sonarqube'
                    ]
                },
                {
                    year: 2018,
                    title: 'Kirk',
                    description: 'System that helps the back-office reinvent, automate and gain deep visibility into ' +
                        'their business processes. I developed the entire front-end and designed the UI. Including a ' +
                        'BPM to design the processes.',
                    technologies: [
                        'ReactJS', 'Redux', 'React Hooks', 'Java', 'Spring Boot', 'JPA', 'JUnit', 'MySQL',
                        'Google Kubernetes Engine', 'Gitlab CI', 'Sonarqube'
                    ]
                }
            ]
        },
        {
            name: 'smn',
            title: 'Full Stack Developer and Scrum Master at SMN',
            period: { start: new Date('2016-05-02'), end: new Date('2018-07-02') },
            location: 'Franca, São Paulo, Brazil',
            description: 'Started as part of a innovation team focused on bringing new technologies. Built the first ' +
                'modules (security, calendar and finance) and Angular UI library used on all their products. ' +
                'Helped teaching both front-end and back-end to new employees and led a small team following agile ' +
                'methodologies.',
            projects: [
                {
                    year: 2018,
                    title: 'Lancers',
                    description: 'Dental plan selling system. I managed a team using agile methodologies and also ' +
                        'helped build the front-end and back-end.',
                    technologies: [ 'Agile Methodologies', 'Angular 6', 'NodeJS', 'PostgreSQL', 'MongoDB (logging)' ]
                },
                {
                    year: 2017,
                    title: 'SMN NFS-e',
                    description: 'Company\'s own NFS-e integration module used on every systems. I developed the back-end.',
                    technologies: [ 'Angular 6', 'NodeJS', 'PostgreSQL', 'MongoDB (logging)' ]
                },
                {
                    year: 2017,
                    title: 'SMNFinance',
                    description: 'Company\'s own finance module used on every systems. I developed both front-end ' +
                        'and back-end.',
                    technologies: [ 'Angular 6', 'NodeJS', 'PostgreSQL', 'MongoDB (logging)' ]
                },
                {
                    year: 2017,
                    title: 'SMNCalendar',
                    description: 'Company\'s own calendar module used on every systems. I projected and developed ' +
                        'the front-end.',
                    technologies: [ 'Angular 6', 'NodeJS', 'PostgreSQL', 'MongoDB (logging)' ]
                },
                {
                    year: 2017,
                    title: 'SMNAuth',
                    description: 'Company\'s own security module used on every systems. I projected and developed ' +
                        'both front-end and back-end.',
                    technologies: [ 'Angular 6', 'NodeJS', 'PostgreSQL', 'MongoDB (logging)' ]
                },
                {
                    year: 2017,
                    title: 'ng-smn-ui',
                    description: 'Second version of the smn-ui made for Angular 6. Developed most of the components.',
                    technologies: [ 'Angular 6', 'Material Design' ]
                },
                {
                    year: 2016,
                    title: 'smn-ui',
                    description: 'Open-Source AngularJS UI Library with our own custom made components, based on ' +
                        'Google\'s Material Design guidelines, used on every company\'s systems.  Developed most of ' +
                        'the components.',
                    technologies: [ 'AngularJS', 'Material Design' ]
                },
                {
                    year: 2016,
                    title: 'Cronos',
                    description: 'Employee clocking manager. I was one of the developers on front-end and back-end.',
                    technologies: [
                        'AngularJS', 'NodeJS 4', 'MochaJS', 'PostgreSQL', 'MongoDB (logging)', 'RabbitMQ',
                        'AWS EC2 with Docker'
                    ],
                    break: true
                }
            ]
        }
    ]

    return (
        <div id='experience' className='Experience Section' tabIndex={1}>
            <Text header>Experience</Text>
            <div className={classNames('experiences', isMobile && 'is-mobile')}>
                {experiences.map(e => (
                    <ExperienceItem
                        key={e.name}
                        name={e.name}
                        title={e.title}
                        period={e.period}
                        location={e.location}
                        description={e.description}
                        projects={e.projects}
                    />
                ))}
            </div>
        </div>
    )
}

export default ExperienceSection
