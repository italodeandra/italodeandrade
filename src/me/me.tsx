import React, { ReactNode } from "react"
import {
    StarRounded,
    StarBorderRounded,
    StarHalfRounded,
    PublicRounded,
    AlternateEmailRounded,
    GitHub,
    LinkedIn,
    Instagram,
    ArchiveRounded
} from "@material-ui/icons"
import { IconButton } from "@material-ui/core"

export const competent = <StarBorderRounded />
export const proficient = <StarHalfRounded />
export const expert = <StarRounded />

const yearsOfExperience = (new Date()).getFullYear() - 2015

export const profile: {
    summary: string
    ambition: string
} = {
    summary: `Passionate software developer with almost ${yearsOfExperience} years of experience working in high tech information technology with a strong sense for design, aesthetics and interaction. Currently working for startups projects in the Netherlands.`,
    ambition: `Having this love for software development, code debugging, issues fixing, learning a new technology to use in new situations, getting to know better the problems that needs to be solved, my life has become very challenging, but I'll always give it all to overcome me all of them, and all the time I'm seeking new challenges so I can always expand what I know.`
}

export const info: {
    name: string
    status: string
    location: string
} = {
    name: 'Ítalo Andrade',
    status: 'Making things with love and javascript.',
    location: 'Eindhoven, Netherlands'
}

export const whereToFindMe = [
    { href: 'https://italodeandra.de', icon: <PublicRounded /> },
    { href: 'mailto:italodeandra@gmail.com', icon: <AlternateEmailRounded /> },
    { href: 'https://github.com/italodeandra', icon: <GitHub /> },
    { href: 'https://www.linkedin.com/in/italodeandra/', icon: <LinkedIn /> },
    { href: 'https://www.instagram.com/italodeandra/', icon: <Instagram /> }
]

export const expertises: {
    label: string
    level: typeof competent | typeof proficient | typeof expert
}[] = [
    { label: 'JavaScript', level: expert },
    { label: 'ReactJS', level: expert },
    { label: 'NodeJS', level: expert },
    { label: 'Angular 2+', level: proficient },
    { label: 'Angular JS', level: competent },
    { label: 'VueJS', level: competent },
    { label: 'HTML', level: expert },
    { label: 'CSS', level: expert },
    { label: 'SASS', level: expert },
    { label: 'TypeScript', level: expert },
    { label: 'React Hooks', level: expert },
    { label: 'Redux', level: expert },
    { label: 'JSS', level: expert },
    { label: 'StyledComponents', level: expert },
    { label: 'Mocha', level: proficient },
    { label: 'Jest', level: proficient },
    { label: 'Jasmine', level: competent },
    { label: 'Java', level: proficient },
    { label: 'Spring Boot', level: proficient },
    { label: 'JPA', level: proficient },
    { label: 'JUnit', level: proficient },
    { label: 'PostgreSQL', level: expert },
    { label: 'MySQL', level: expert },
    { label: 'MongoDB', level: proficient },
    { label: 'jQuery', level: expert },
    { label: 'Bootstrap', level: expert },
    { label: 'PHP', level: competent },
    { label: 'AWS', level: proficient },
    { label: 'GCP', level: proficient },
    { label: 'Azure', level: competent },
    { label: 'Docker', level: expert },
    { label: 'Kubernetes', level: competent },
    { label: 'Webpack', level: competent },
    { label: 'Git', level: expert },
    { label: 'JIRA', level: competent },
    { label: 'GitLab', level: expert },
    { label: 'GitHub', level: expert },
    { label: 'CircleCI', level: competent },
    { label: 'TravisCI', level: competent },
    { label: 'NPM', level: expert },
    { label: 'Maven', level: competent },
    { label: 'Socket', level: expert },
    { label: 'RabbitMQ', level: competent },
    { label: 'SonarQube', level: competent },
    { label: 'Grafana', level: competent },
    { label: 'Adobe Photoshop', level: competent },
    { label: 'Adobe XD', level: expert },
    { label: 'Figma', level: expert },
    { label: 'UX Design', level: expert },
    { label: 'Cloud', level: expert },
    { label: 'Agile Methodologies', level: expert },
    { label: 'Scrum', level: expert },
    { label: 'Functional programming', level: expert },
    { label: 'Object-oriented programming', level: proficient },
    { label: 'Progressive Web Apps', level: proficient },
    { label: 'SaaS', level: proficient },
    { label: 'Chrome Extensions', level: proficient },
    { label: 'Tech Leadership', level: expert },
    { label: 'Team Leadership', level: proficient },
    { label: 'Teaching', level: competent }
]

export const experiences: {
    companyName: string
    companyLogo: string
    title: string
    description: string
    location: string
    period: string
    projects?: {
        name: string
        period: string
        description: string
        technologies?: string[]
        link?: ReactNode
    }[]
}[] = [
    {
        companyName: 'Teamexpat',
        companyLogo: '/assets/teamexpat.jpg',
        title: 'Frontend Developer',
        description: 'First experience working outside of Brazil for a consulting company as mainly Frontend Developer. Developing for start-ups and their challenging products.',
        location: 'Netherlands',
        period: 'Jan 2020 – present',
        projects: [
            {
                name: 'Aedo',
                period: 'April 2020 – present',
                description: 'Building a new SaaS that can be used by mid-large facilitating companies. Working on the front-end using ReactJS.',
                technologies: [ 'ReactJS' ]
            },
            {
                name: 'Teamexpat Timesheet',
                period: 'Jan 2020 – present',
                description: `Company's own time sheet platform.`,
                technologies: [ 'VueJS', 'NodeJS', 'PostgreSQL' ]
            },
            {
                name: 'Qualified.technology',
                period: 'Jan 2020 – April 2020',
                description: 'Easily find high tech expertise to advance technology development. Helped the fixes and development with VueJS.',
                technologies: [ 'VueJS' ]
            }
        ]
    },
    {
        companyName: 'Luizalabs',
        companyLogo: '/assets/luizalabs.jpg',
        title: 'Fullstack Developer',
        description: 'Working with a multidisciplinary team focused on developing process automation solutions for a big brazilian retailer. Messing around on the back-end with Java (Spring Boot and JPA with MySQL) and NodeJS. Making sparkling things with ReactJS. Versioned with GitLab (also using GitLab CI). Guaranteed code quality with SonarQube. Following agile methodologies and designing how our apps should look.',
        location: 'Brazil',
        period: 'Aug 2018 – Dec 2019',
        projects: [
            {
                name: 'Reed',
                period: 'Oct 2019 – Dec 2019',
                description: 'System that all the company branches do their store inventory and the back-office manages everything. I developed both front-end and back-end and designed the UI. Became a ReactJS reference for using React Hooks.',
                technologies: [ 'ReactJS', 'React Hooks', 'TypeScript', 'Java', 'Spring Boot', 'JPA', 'JUnit', 'MySQL', 'Google Kubernetes Engine', 'GitLab CI', 'SonarQube', 'Grafana' ]
            },
            {
                name: 'Kirk',
                period: 'Nov 2018 – Dec 2019',
                description: 'System that helps the back-office reinvent, automate and gain deep visibility into their business processes. I developed the entire front-end and designed the UI and UX. Including a BPM to design the processes.',
                technologies: [ 'ReactJS', 'Redux', 'React Hooks', 'Java', 'Spring Boot', 'JPA', 'JUnit', 'MySQL', 'Google Kubernetes Engine', 'GitLab CI', 'SonarQube', 'Grafana' ]
            },
            {
                name: 'Spock',
                period: 'Nov 2018 – Dec 2019',
                description: `Bundle of workers and APIs used on some of the company's business processes.`,
                technologies: [ 'Java', 'Spring Boot', 'JPA', 'JUnit', 'MySQL', 'Google Kubernetes Engine', 'GitLab CI', 'SonarQube' ]
            },
            {
                name: 'Vulcan UI',
                period: 'Nov 2018 – Dec 2019',
                description: `My own ReactJS UI Library based on Google's Material Design guidelines. My Labs squad started using it on all of our projects. I developed most of the components.`,
                technologies: [ 'ReactJS', 'React Hooks', 'Material Design Guidelines' ],
                link: <IconButton href="https://github.com/italodeandra/vulcan-ui" target="_blank">
                    <GitHub />
                </IconButton>
            },
            {
                name: 'Luiza Viagens',
                period: 'Aug 2018 – Nov 2018',
                description: `Company's refund work travel expenses platform.`,
                technologies: [ 'Angular 6', 'NodeJS', 'MySQL' ]
            }
        ]
    },
    {
        companyName: 'SMN',
        companyLogo: '/assets/smn.png',
        title: 'Fullstack Developer, Tech Lead and Scrum Master',
        description: 'Started as part of a innovation team focused on bringing new technologies. Built the first modules (security, calendar and finance) and Angular UI library used on all their products. Helped teaching both front-end and back-end to new employees and led a small team following agile methodologies.',
        location: 'Brazil',
        period: 'May 2016 – Jul 2018',
        projects: [
            {
                name: 'ng-smn-ui',
                period: 'Jan 2017 – Jul 2018',
                description: `Open-Source Angular UI Library with our own custom made components, based on Google's Material Design guidelines, used on every company's systems. Developed most of the components. Using Angular 6, Material Design.`,
                technologies: [ 'Angular 6', 'Material Design Guidelines' ],
                link: <IconButton href="https://github.com/smn-official/ng-smn-ui" target="_blank">
                    <GitHub />
                </IconButton>
            },
            {
                name: 'Lancers',
                period: 'Jan 2018 – Jul 2018',
                description: 'Dental plan selling system. I managed a team using agile methodologies and also helped build the front-end and back-end.',
                technologies: [ 'Agile Methodologies', 'Angular 6', 'NodeJS', 'PostgreSQL', 'MongoDB', 'Azure', 'Docker' ]
            },
            {
                name: 'SMN NFS-e',
                period: 'Mar 2018 - Jul 2018',
                description: `Company's own NFS-e integration module used on every systems. I developed the entire back-end.`,
                technologies: [ 'Angular 6', 'NodeJS', 'PostgreSQL', 'MongoDB' ]
            },
            {
                name: 'SMNAuth',
                period: 'Jan 2017 - Jul 2018',
                description: `Company's own security module used on every systems. I projected and developed both front-end and back-end.`,
                technologies: [ 'Angular 6', 'NodeJS', 'PostgreSQL', 'MongoDB' ]
            },
            {
                name: 'SMNCalendar',
                period: 'Jan 2017 - Jul 2018',
                description: `Company's own calendar module used on every systems. I projected and developed the front-end.`,
                technologies: [ 'Angular 6', 'NodeJS', 'PostgreSQL', 'MongoDB' ]
            },
            {
                name: 'SMNFinance',
                period: 'Aug 2017 - Jul 2018',
                description: `Company's own finance module used on every systems. I developed both front-end and back-end.`,
                technologies: [ 'Angular 6', 'NodeJS', 'PostgreSQL', 'MongoDB' ]
            },
            {
                name: 'Cronos',
                period: 'May 2016 - Jul 2018',
                description: `Employee clocking manager. I was one of the developers on front-end and back-end.`,
                technologies: [ 'AngularJS', 'NodeJS 4', 'Mocha', 'PostgreSQL', 'MongoDB', 'RabbitMQ', 'AWS', 'Docker' ]
            },
            {
                name: 'smn-ui',
                period: 'May 2016 - Jan 2017',
                description: `Open-Source AngularJS UI Library with our own custom made components, based on Google's Material Design guidelines, used on every company's systems. Developed most of the components.`,
                technologies: [ 'AngularJS', 'Material Design Guidelines' ],
                link: <IconButton href="https://github.com/smn-official/smn-ui" target="_blank">
                    <GitHub />
                </IconButton>
            }
        ]
    },
    {
        companyName: 'Home',
        companyLogo: '/assets/home-alone.png',
        title: 'Alone',
        description: 'My own personal projects developed in my free time.',
        location: 'World',
        period: '2011 – present',
        projects: [
            {
                name: 'Twitter Toxic-bot Filter',
                period: 'Apr 2020 – present',
                description: 'It will help you filter out and mute all the Twitter users that are triggered by a specific subject and answers in an aggressive or unwanted way. Among other things.',
                technologies: [ 'ReactJS', 'NodeJS', 'PostgreSQL', 'Socket', 'Twitter API' ],
                link: <IconButton href="https://twitter-toxic-bot-filter.italodeandra.de" target="_blank">
                    <PublicRounded />
                </IconButton>
            },
            {
                name: 'Trackfy',
                period: 'Oct 2014 – Oct 2018',
                description: 'It was my first web app made with PHP, MySQL, jQuery and my own vanilla CSS components. Made for people who wanted to be notified of new episodes for their favorite TV Show and to know which episode they already watched.',
                technologies: [ 'PHP', 'MySQL', 'jQuery' ],
                link: <IconButton href="https://web.archive.org/web/20171024202157/https://www.trackfy.com/" target="_blank">
                    <ArchiveRounded />
                </IconButton>
            }
        ]
    }
]