import React, { useState } from "react"
import {
    Typography,
    Box,
    List,
    ListItem,
    ListItemAvatar,
    Avatar,
    ListItemText,
    ExpansionPanel as MuiExpansionPanel,
    ExpansionPanelSummary as MuiExpansionPanelSummary,
    ExpansionPanelDetails as MuiExpansionPanelDetails,
    Chip
} from "@material-ui/core"
import { makeStyles, withStyles, Theme } from '@material-ui/core/styles'
import { ExpandMoreRounded } from "@material-ui/icons"
import { experiences } from "../../me/me"
import scrollIntoView  from 'smooth-scroll-into-view-if-needed'
import FloatingTypography from "../../common/components/FloatingTypography/FloatingTypography"

const ExpansionPanel = withStyles({
    root: {
        border: '1px solid rgba(0, 0, 0, .125)',
        boxShadow: 'none',
        '&:not(:last-child)': {
            borderBottom: 0
        },
        '&:before': {
            display: 'none'
        },
        '&$expanded': {
            margin: 'auto'
        }
    },
    expanded: {}
})(MuiExpansionPanel)

const ExpansionPanelSummary = withStyles({
    root: {
        backgroundColor: 'rgba(0, 0, 0, .03)',
        borderBottom: '1px solid rgba(0, 0, 0, .125)',
        marginBottom: -1,
        minHeight: 56,
        '&$expanded': {
            minHeight: 56
        }
    },
    content: {
        '&$expanded': {
            margin: '12px 0'
        }
    },
    expanded: {}
})(MuiExpansionPanelSummary)

const ExpansionPanelDetails = withStyles((theme) => ({
    root: {
        padding: theme.spacing(2),
        display: 'block'
    }
}))(MuiExpansionPanelDetails)

const useStyles = makeStyles((theme: Theme) => ({
    companyLogo: {
        transition: theme.transitions.create('filter', { easing: theme.transitions.easing.easeIn }),
        '&:not(:hover)': {
            filter: 'grayscale(100%)'
        }
    },

    panelHeading: {
        fontSize: theme.typography.pxToRem(15)
        // flexBasis: '33.33%',
        // flexShrink: 0
    },
    panelSecondaryHeading: {
        fontSize: theme.typography.pxToRem(15),
        color: theme.palette.text.secondary,
        marginLeft: 'auto',
        marginRight: theme.spacing(2)
    },

    technologies: {
        margin: theme.spacing(2, -0.5, 0 -0.5)
    },
    technology: {
        margin: theme.spacing(0.5)
    }
}))

const Experiences = () => {
    const classes = useStyles()
    const [ expanded, setExpanded ] = useState<boolean | string>(false)

    const handleChange = (panel: string) => (event: any, isExpanded: any) => {
        setExpanded(isExpanded ? panel : false)
        if (isExpanded) {
            setTimeout(() => {
                const panelEl = document.querySelector(`#${panel.replace(/ /g, '-')}`)
                if (panelEl) {
                    scrollIntoView(panelEl, {
                        behavior: 'smooth',
                        block: 'nearest',
                        scrollMode: 'if-needed'
                    })
                }
            }, 400)
        }
    }

    return (<>
        <FloatingTypography text="Experiences" variant="h6" gutterBottom>
            <Box mb={3}>
                <List disablePadding>
                    {experiences.map(e => (
                        <Box key={e.companyName} mb={2}>
                            <ListItem disableGutters>
                                <ListItemAvatar>
                                    <Avatar
                                        className={classes.companyLogo}
                                        alt={`${e.companyName}'s logo`}
                                        src={e.companyLogo}
                                    />
                                </ListItemAvatar>
                                <ListItemText
                                    primary={`${e.title} at ${e.companyName}`}
                                    secondary={`${e.location}, ${e.period}`}
                                />
                            </ListItem>
                            {e.projects?.length && <>
                                <Box pl={7}>
                                    <Typography variant="body2" align="justify" paragraph>
                                        {e.description}
                                    </Typography>
                                    <Typography variant="subtitle2" gutterBottom>
                                        Projects
                                    </Typography>
                                    {e.projects.map(p => (
                                        <ExpansionPanel
                                            key={p.name}
                                            id={p.name.replace(/ /g, '-')}
                                            expanded={expanded === p.name}
                                            onChange={handleChange(p.name)}
                                        >
                                            <ExpansionPanelSummary
                                                expandIcon={<ExpandMoreRounded />}
                                            >
                                                <Typography className={classes.panelHeading}>{p.name}</Typography>
                                                <Typography className={classes.panelSecondaryHeading}>{p.period}</Typography>
                                            </ExpansionPanelSummary>
                                            <ExpansionPanelDetails>
                                                <Typography variant="body2">{p.description}</Typography>
                                                {p.technologies?.length &&
                                                    <Box className={classes.technologies}>
                                                        {p.technologies.map(t => (
                                                            <Chip key={t} className={classes.technology} label={t} />
                                                        ))}
                                                    </Box>
                                                }
                                                {p.link &&
                                                    <Box mt={2}>{p.link}</Box>
                                                }
                                            </ExpansionPanelDetails>
                                        </ExpansionPanel>
                                    ))}
                                </Box>
                            </>}
                        </Box>
                    ))}
                </List>
            </Box>
        </FloatingTypography>
    </>)
}

export default Experiences