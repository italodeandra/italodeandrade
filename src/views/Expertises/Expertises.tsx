import React, { useState, ReactNode } from "react"
import { Box, Typography, Tooltip, Chip } from "@material-ui/core"
import { makeStyles, Theme } from "@material-ui/core/styles"
import { StarBorderRounded, StarHalfRounded, StarRounded } from "@material-ui/icons"
import { expertises, competent, proficient, expert } from "../../me/me"
import FloatingTypography from "../../common/components/FloatingTypography/FloatingTypography"

const useStyles = makeStyles((theme: Theme) => ({
    expertises: {
        margin: theme.spacing(0, -0.5)
    },
    expertise: {
        margin: theme.spacing(0.5)
    },
    clickable: {
        cursor: 'pointer'
    }
}))

const Expertises = () => {
    const classes = useStyles()
    const [ filters, setFilters ] = useState<ReactNode[]>([])

    const toggleFilter = (newFilter: ReactNode) => {
        if (filters.includes(newFilter)) {
            setFilters([ ...filters.filter(f => f !== newFilter) ])
        } else {
            setFilters([ ...filters, newFilter ])
        }
    }

    return (
        <FloatingTypography
            text="Expertises"
            custom={
                <Box display="flex" mb="0.35em">
                    <Typography variant="h6" component="span">
                        Expertises
                    </Typography>
                    <Box component="span" display="inline-flex" alignItems="center" ml={1}>
                        <Tooltip title="Competent" arrow placement="top">
                            <StarBorderRounded
                                className={classes.clickable}
                                onClick={toggleFilter.bind(null, competent)}
                                color={filters.includes(competent) ? 'secondary' : undefined}
                            />
                        </Tooltip>
                        <Tooltip title="Proficient" arrow placement="top">
                            <StarHalfRounded
                                className={classes.clickable}
                                onClick={toggleFilter.bind(null, proficient)}
                                color={filters.includes(proficient) ? 'secondary' : undefined}
                            />
                        </Tooltip>
                        <Tooltip title="Expert" arrow placement="top">
                            <StarRounded
                                className={classes.clickable}
                                onClick={toggleFilter.bind(null, expert)}
                                color={filters.includes(expert) ? 'secondary' : undefined}
                            />
                        </Tooltip>
                    </Box>
                </Box>
            }
        >
            <Box mb={2}>
                <div className={classes.expertises}>
                    {expertises
                        .filter(e => !filters.length || filters.includes(e.level))
                        .map(e => (
                            <Chip
                                key={e.label}
                                className={classes.expertise}
                                label={e.label}
                                icon={e.level}
                            />
                        ))
                    }
                </div>
            </Box>
        </FloatingTypography>
    )
}

export default Expertises