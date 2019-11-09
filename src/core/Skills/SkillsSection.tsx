import React, { FunctionComponent } from 'react'
import { Text } from 'reactjs-library'
import './SkillsSection.sass'

const SkillsSection: FunctionComponent = () => {
    return (
        <div id='skills' className='Skills Section' tabIndex={1}>
            <Text header>Skills</Text>
            <Text paragraph className='skills'>
                <Text code select='all' className='skill'>JavaScript</Text>
                <Text code select='all' className='skill'>ReactJS</Text>
                <Text code select='all' className='skill'>Angular</Text>
                <Text code select='all' className='skill'>HTML5</Text>
                <Text code select='all' className='skill'>CSS3</Text>
                <Text code select='all' className='skill'>SASS</Text>
                <Text code select='all' className='skill'>UI/UX Design</Text>
                <Text code select='all' className='skill'>PHP</Text>
            </Text>
            <Text paragraph className='skills'>
                <Text code select='all' className='skill'>NodeJS</Text>
                <Text code select='all' className='skill'>PostgreSQL</Text>
                <Text code select='all' className='skill'>MongoDB</Text>
                <Text code select='all' className='skill'>Java</Text>
                <Text code select='all' className='skill'>MySQL</Text>
            </Text>
            <Text paragraph className='skills'>
                <Text code select='all' className='skill'>Functional Programming</Text>
                <Text code select='all' className='skill'>Object-Oriented Programming</Text>
                <Text code select='all' className='skill'>AWS</Text>
                <Text code select='all' className='skill'>Docker</Text>
                <Text code select='all' className='skill'>GitLab CI</Text>
                <Text code select='all' className='skill'>GitHub Actions</Text>
                <Text code select='all' className='skill'>Agile Methodologies</Text>
            </Text>
        </div>
    )
}

export default SkillsSection
