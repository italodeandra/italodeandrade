import React from "react"
import { Card, useMediaQuery, useScrollTrigger, Box, Typography, Link } from "@material-ui/core"
import { useTheme, makeStyles, Theme } from '@material-ui/core/styles'
import Image from 'material-ui-image'
import { LocationOnRounded } from "@material-ui/icons"
import { whereToFindMe, info } from "../../me/me"

const useStyles = makeStyles((theme: Theme) => ({
    whereToFindMeItem: {
        '& + &': {
            marginLeft: theme.spacing(1)
        }
    },

    profilePlaceHolder: {
        [theme.breakpoints.up('sm')]: {
            width: theme.spacing(profileWidthSpacing),
            minWidth: theme.spacing(profileWidthSpacing)
        },
        [theme.breakpoints.only('sm')]: {
            width: theme.spacing(25),
            minWidth: theme.spacing(25),
            maxWidth: theme.spacing(25)
        }
    },
    profile: {
        [theme.breakpoints.up('sm')]: {
            width: theme.spacing(profileWidthSpacing),
            minWidth: theme.spacing(profileWidthSpacing),
            position: 'fixed',
            padding: theme.spacing(0, 3)
        },
        [theme.breakpoints.only('sm')]: {
            width: theme.spacing(25),
            minWidth: theme.spacing(25),
            maxWidth: theme.spacing(25),
            bottom: 0,
            top: 0,
            paddingTop: theme.spacing(9),
            overflowY: 'auto'
        }
    }
}))

const profileWidthSpacing = 36

const Info = () => {
    const theme = useTheme()
    const classes = useStyles()

    const isMobileLandscape = useMediaQuery(theme.breakpoints.up('sm'), { noSsr: true })

    const topScrolled = useScrollTrigger({
        disableHysteresis: true,
        threshold: 0
    })

    return (
        <div className={classes.profilePlaceHolder}>
            <div className={classes.profile}>
                <Card elevation={isMobileLandscape && topScrolled ? 4 : 1}>
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
                            {info.name}
                        </Typography>
                        <Typography variant="body2" paragraph>
                            {info.status}
                        </Typography>
                        <Typography
                            noWrap
                            variant="overline"
                            component="div"
                        >
                            <LocationOnRounded
                                fontSize='small'
                                style={{ marginLeft: -3, marginBottom: -6, marginRight: theme.spacing(1) }}
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
        </div>
    )
}

export default Info