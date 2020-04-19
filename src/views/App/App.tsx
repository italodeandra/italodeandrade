import React, { useMemo } from 'react'
import { createMuiTheme, makeStyles, Theme, ThemeProvider } from '@material-ui/core/styles'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { grey, blue } from '@material-ui/core/colors'
import { CssBaseline, Fade, useMediaQuery } from '@material-ui/core'
import {
  PolicyRounded as PolicyRoundedIcon,
  PersonRounded
} from '@material-ui/icons'
import { useLocalStorage } from 'react-use'
import Drawer, { toolbarStyles } from '../../common/components/App/Drawer/Drawer'
import NotFound from '../NotFound/NotFound'
import AppBar from '../../common/components/App/AppBar/AppBar'
import Home from '../Home/Home'

const useStyles = makeStyles((theme: Theme) => ({
    root: {
        display: 'flex'
    },

    logo: {
        display: 'flex',
        color: 'inherit',
        marginRight: theme.spacing(2)
    },

    toolbar: {
        ...toolbarStyles(theme)
    },

    content: {
        flexGrow: 1
    }
}))

const menus = [
    { title: 'Profile', icon: <PersonRounded />, url: '/', exact: true },
    {
        subheader: 'Projects',
        title: 'Twitter Toxic-bot Filter',
        icon: <PolicyRoundedIcon />,
        url: 'https://twitter-toxic-bot-filter.italodeandra.de/'
    }
]

export const appTitle = 'Ítalo Andrade'

function AppWithProviders() {
    const classes = useStyles()
    const [ open, setOpen ] = useLocalStorage<boolean>('NavigationDrawerOpen', false)

    function handleDrawerOpen() {
        setOpen(true)
    }

    function handleDrawerClose() {
        setOpen(false)
    }

    return (
        <div className={classes.root}>
            <AppBar
                open={open}
                // logo={logo}
                handleDrawerOpen={handleDrawerOpen}
                // appTitle={appTitle}
                drawerShowing
            />
            <Drawer
                open={open}
                // logo={logo}
                handleDrawerClose={handleDrawerClose}
                handleDrawerOpen={handleDrawerOpen}
                show
                menus={menus}
                appTitle={appTitle}
            />

            <main className={classes.content}>
                <div className={classes.toolbar} />
                <Fade in>
                    <div>
                        <Switch>
                        <Route path="/" exact><Home /></Route>
                        <Route path="**"><NotFound /></Route>
                        </Switch>
                    </div>
                </Fade>
            </main>
        </div>
    )
}

function App() {
    const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)')
    const theme = useMemo(() => createMuiTheme({
        palette: {
            type: prefersDarkMode ? 'dark' : 'light',
            primary: {
                main: grey[600]
            },
            secondary: {
                main: blue[500]
            }
        }
    }), [ prefersDarkMode ])

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />

            <Router>
                <AppWithProviders />
            </Router>
        </ThemeProvider>
    )
}

export default App
