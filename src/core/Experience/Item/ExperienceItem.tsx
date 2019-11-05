import React, { FunctionComponent } from 'react'
import { classNames, useMobile } from 'reactjs-library'
import Text from '../../../components/Text/Text'
import useTimeAgo from '../../../hooks/useTimeAgo'
import dateFormat from '../../../utils/dateFormat'
import './ExperienceItem.sass'

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

const ExperienceItem: FunctionComponent<Props> = ({
                                                      name,
                                                      title,
                                                      period,
                                                      location,
                                                      description
                                                  }) => {
    let [ isMobile ] = useMobile()
    let dateFormatOptions = { month: 'short', year: 'numeric' }

    let [ timeAgo ] = useTimeAgo(new Date(period.start), {
        isMinified: true,
        now: period.end !== 'present' ? period.end as Date : null
    })

    return (
        <Text paragraph className={classNames('ExperienceItem', isMobile && 'is-mobile')}>
            <div className={'company ' + name}/>
            <div>
                <div className='title'>{title}</div>
                <div className='period'>
                    {dateFormat(period.start, dateFormatOptions)}
                    &nbsp;-&nbsp;
                    {period.end === 'present'
                        ? 'Present'
                        : dateFormat(period.end, dateFormatOptions)
                    }
                    &nbsp;({timeAgo})
                </div>
                <div className='location'>{location}</div>
                <Text justify>
                    {description}
                </Text>
            </div>
        </Text>
    )
}

export default ExperienceItem
