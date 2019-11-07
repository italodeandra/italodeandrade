import React, { FunctionComponent } from 'react'
import { classNames, Text, useMobile } from 'reactjs-library'
import './ExperienceSection.sass'
import ExperienceItem from './Item/ExperienceItem'

const ExperienceSection: FunctionComponent = () => {
    let [ isMobile ] = useMobile()

    let experiences = [
        {
            name: 'luizalabs',
            title: 'Developer at luizalabs',
            period: { start: new Date('2018-08-02'), end: 'present' },
            location: 'Franca, São Paulo, Brazil',
            description: 'Working with a multidisciplinary team focused on developing process automation solutions ' +
                'for a big brazilian retailer. Messing around on the back-end with Java (Spring Boot and JPA with ' +
                'MySQL) and NodeJS. Making sparkling things with ReactJS. Versioned with GitLab ' +
                '(also using GitLab CI). Guaranteed code quality with SonarQube. Following agile methodologies and ' +
                'designing how our apps should look.'
        },
        {
            name: 'smn',
            title: 'Developer at SMN',
            period: { start: new Date('2016-05-02'), end: new Date('2018-07-02') },
            location: 'Franca, São Paulo, Brazil',
            description: 'Started as part of a innovation team focused on bringing new technologies. Built the first ' +
                'modules (security, calendar and finance) and Angular UI library used on all their products. ' +
                'Helped teaching both front-end and back-end to new employees and led a small team following agile ' +
                'methodologies. Worked with NodeJS, MySQL, MongoDB and Angular.'
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
                    />
                ))}
            </div>
        </div>
    )
}

export default ExperienceSection
