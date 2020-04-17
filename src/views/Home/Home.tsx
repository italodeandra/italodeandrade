import { Box, Card, Container, Link, Typography, useMediaQuery, useScrollTrigger } from '@material-ui/core'
import { makeStyles, Theme, useTheme } from '@material-ui/core/styles'
import React from 'react'
import useTitle from '../../common/hooks/useTitle'
import { appTitle } from '../App/App'
import Image from 'material-ui-image'
import {
    AlternateEmailRounded,
    GitHub,
    Instagram,
    LinkedIn,
    LocationOnRounded as LocationOnRoundedIcon,
    PublicRounded
} from '@material-ui/icons'
import clsx from 'clsx'

const useStyles = makeStyles((theme: Theme) => ({
    whereToFindMeItem: {
        '& + &': {
            marginLeft: theme.spacing(1)
        }
    },

    isMobileLandscape: {
        maxWidth: theme.spacing(25),
        bottom: 0,
        top: theme.spacing(3),
        overflowY: 'auto',
        zIndex: theme.zIndex.appBar + 2
    }
}))

const whereToFindMe = [
    { href: 'https://italodeandra.de', icon: <PublicRounded /> },
    { href: 'mailto:italodeandra@gmail.com', icon: <AlternateEmailRounded /> },
    { href: 'https://github.com/italodeandra', icon: <GitHub /> },
    { href: 'https://www.linkedin.com/in/italodeandra/', icon: <LinkedIn /> },
    { href: 'https://www.instagram.com/italodeandra/', icon: <Instagram /> }
]

const Home = () => {
    const theme = useTheme()
    const classes = useStyles()
    useTitle(appTitle)
    const isMobile = useMediaQuery(theme.breakpoints.only('xs'), { noSsr: true })
    const isMobileLandscape = useMediaQuery(theme.breakpoints.only('sm'), { noSsr: true })

    const scrolled = useScrollTrigger({
        disableHysteresis: true,
        threshold: 0
    })

    const yearsOfExperience = (new Date()).getFullYear() - 2015

    return (
        <Container maxWidth="md" disableGutters>
            <Box p={3} display='flex' flexDirection={isMobile ? 'column-reverse' : undefined}>
                <Box style={{ marginBottom: 3000 }}>
                    <Typography variant="h6" gutterBottom>
                        Summary
                    </Typography>
                    <Typography variant="body1" align="justify" paragraph>
                        Passionate software developer with almost {yearsOfExperience} years of experience working in high tech information
                        technology with a strong sense for design, aesthetics and interaction. Currently working for
                        startups projects in the Netherlands.
                    </Typography>

                    <Typography variant="h6" gutterBottom>
                        Ambition
                    </Typography>
                    <Typography variant="body1" align="justify" paragraph>
                        Having this love for software development, code debugging, issues fixing, learning a new
                        technology to use in new situations, getting to know better the problems that needs to be solved,
                        my life has become very challenging, but I'll always give it all to overcome me all of them, and
                        all the time I'm seeking new challenges so I can always expand what I know.
                    </Typography>
                </Box>
                {!isMobile &&
                    <div style={{
                        minWidth: theme.spacing(31),
                        marginLeft: theme.spacing(3)
                    }} />
                }
                <div
                    className={clsx({
                        [classes.isMobileLandscape]: isMobileLandscape
                    })}
                    style={!isMobile ? {
                        width: theme.spacing(31),
                        position: 'fixed',
                        right: theme.spacing(3)
                    } : undefined}
                >
                    <Card
                        style={{
                            borderRadius: theme.spacing(2)
                        }}
                        elevation={scrolled ? 4 : 1}
                    >
                        <Image
                            style={{
                                maxWidth: '100%',
                                maxHeight: '100%'
                            }}
                            src={'/logo512.png'}
                            disableSpinner
                        />

                        <Box p={2}>
                            <Typography variant="h6" gutterBottom>
                                Ítalo Andrade
                            </Typography>
                            <Typography variant="body2" paragraph>
                                Making things with love and javascript.
                            </Typography>
                            <Typography
                                variant="overline"
                                style={{ display: 'flex', alignItems: 'center', marginBottom: -6 }}
                            >
                                <LocationOnRoundedIcon
                                    fontSize='small'
                                    style={{ marginLeft: -3, marginRight: theme.spacing(1) }}
                                />
                                Eindhoven, Netherlands
                            </Typography>
                        </Box>
                    </Card>
                    <Box display="flex" justifyContent="center" py={2}>
                        {whereToFindMe.map(i => (
                            <Link href={i.href} key={i.href} className={classes.whereToFindMeItem}>
                                {i.icon}
                            </Link>
                        ))}
                    </Box>
                </div>
            </Box>
        </Container>
    )
}

export default Home