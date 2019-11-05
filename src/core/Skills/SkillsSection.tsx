import React, { FunctionComponent } from 'react'
import Text from '../../components/Text/Text'
import './SkillsSection.sass'

const SkillsSection: FunctionComponent = () => {
    return (
        <div id='skills' className='Skills Section' tabIndex={1}>
            <Text header>Skills</Text>
            <Text paragraph className='skills'>
                <Text code className='skill'>JavaScript</Text>
                <Text code className='skill'>ReactJS</Text>
                <Text code className='skill'>Angular</Text>
                <Text code className='skill'>HTML5</Text>
                <Text code className='skill'>CSS3</Text>
                <Text code className='skill'>SASS</Text>
                <Text code className='skill'>UI/UX Design</Text>
            </Text>
            <Text paragraph className='skills'>
                <Text code className='skill'>NodeJS</Text>
                <Text code className='skill'>PostgreSQL</Text>
                <Text code className='skill'>MongoDB</Text>
                <Text code className='skill'>Java</Text>
                <Text code className='skill'>MySQL</Text>
            </Text>
            <Text paragraph className='skills'>
                <Text code className='skill'>AWS</Text>
                <Text code className='skill'>Docker</Text>
                <Text code className='skill'>GitLab CI</Text>
                <Text code className='skill'>GitHub Actions</Text>
            </Text>
        </div>
    )
}

export default SkillsSection
