import React, { FunctionComponent } from 'react'
import { classNames, dateFormat, Text, useMobile } from 'reactjs-library'
import './EducationItem.sass'

interface Props {
    name: string
    title: string
    period: {
        start: Date
        end: Date | string
    }
    location: string
    description: string
}

const EducationItem: FunctionComponent<Props> = ({
                                                     name,
                                                     title,
                                                     period,
                                                     location,
                                                     description
                                                 }) => {
    let [ isMobile ] = useMobile()
    let dateFormatOptions = { year: 'numeric' }

    return (
        <Text paragraph className={classNames('EducationItem', isMobile && 'is-mobile')}>
            <div className={'company ' + name}/>
            <div>
                <div className='title'>{title}</div>
                <div className='period'>
                    {dateFormat(period.start, dateFormatOptions)}
                    &nbsp;-&nbsp;
                    {dateFormat(period.end, dateFormatOptions)}
                </div>
                <div className='location'>{location}</div>
                <Text justify>
                    {description}
                </Text>
            </div>
        </Text>
    )
}

export default EducationItem
