import React, { FunctionComponent } from 'react'
import { classNames, Text, useMobile } from 'reactjs-library'
import './EducationSection.sass'
import EducationItem from './Item/EducationItem'

const EducationSection: FunctionComponent = () => {
    let [ isMobile ] = useMobile()

    let experiences = [
        {
            name: 'unifran',
            title: 'Universidade de Franca',
            period: { start: new Date('2015-01-02'), end: new Date('2018-01-02') },
            location: 'Franca, São Paulo, Brazil',
            description: 'BSc, Computer Information Systems'
        }
    ]

    return (
        <div id='education' className='Education Section' tabIndex={1}>
            <Text header>Education</Text>
            <div className={classNames('educations', isMobile && 'is-mobile')}>
                {experiences.map(e => (
                    <EducationItem
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

export default EducationSection
