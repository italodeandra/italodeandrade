import React from 'react'
import useTitle from '../../common/hooks/useTitle'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(() => ({
    john: {
        position: 'fixed',
        bottom: 0,
        right: 0,
        maxWidth: '100%'
    }
}))

const NotFound = () => {
    useTitle('Page not found')
    const classes = useStyles()

    return (
      <img className={classes.john} src={'/assets/john-travolta.gif'} alt="John Travolta's confused gif" />
    )
}

export default NotFound