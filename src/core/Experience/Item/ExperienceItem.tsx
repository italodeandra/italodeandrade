import React, { FunctionComponent } from 'react'
import { classNames, dateFormat, Text, useMobile, useTimeAgo } from 'reactjs-library'
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
    projects?: {
        year: number
        title: string
        description: string
        technologies: string[]
        break?: boolean
    }[]
}

const ExperienceItem: FunctionComponent<Props> = ({
                                                      name,
                                                      title,
                                                      period,
                                                      location,
                                                      description,
                                                      projects
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
                <Text paragraph className='skills'>
                    <Text subheader style={{ marginTop: 2 * 8 }}>Projects</Text>
                    {projects && projects.map(project => (<div style={{ marginTop: 2 * 8 }}>
                        <Text paragraph justify>
                            {project.year} <Text bold>{project.title}</Text>
                        </Text>
                        <Text paragraph justify>
                            {project.description} Using {project.technologies.join(', ')}.
                        </Text>
                        <div className={project.break ? 'page-break-after' : undefined}/>
                    </div>))}
                </Text>
            </div>
        </Text>
    )
}

export default ExperienceItem
