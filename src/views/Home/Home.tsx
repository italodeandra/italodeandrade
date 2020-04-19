import React from 'react'
import {
    Box,
    Container,
    useMediaQuery
} from '@material-ui/core'
import { useTheme } from '@material-ui/core/styles'
import useTitle from '../../common/hooks/useTitle'
import { appTitle } from '../App/App'
import Profile from '../Profile/Profile'
import Expertises from '../Expertises/Expertises'
import Experiences from '../Experiences/Experiences'
import Qualifications from '../Qualifications/Qualifications'
import Info from '../Info/Info'

const Home = () => {
    const theme = useTheme()
    useTitle(appTitle)
    const isMobile = useMediaQuery(theme.breakpoints.only('xs'), { noSsr: true })

    return (
        <Container maxWidth="md" disableGutters>
            <Box p={3} display='flex' flexDirection={isMobile ? 'column-reverse' : undefined}>
                <div>
                    <Profile />

                    <Expertises />

                    <Experiences />

                    <Qualifications />
                </div>
                <Info />
            </Box>
        </Container>
    )
}

export default Home