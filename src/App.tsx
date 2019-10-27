import React, { FunctionComponent } from 'react'
import { BrowserRouter as Router, NavLink, Route, Switch } from 'react-router-dom'
import {
    ApplicationBar,
    classNames,
    Icon,
    List,
    NavigationDrawer,
    Tooltip,
    TooltipSetRef,
    useLocalStorage,
    useMobile
} from 'reactjs-library'
import './App.sass'
import HomeView from './core/Home/HomeView'
import useTitle from './hooks/useTitle'

const App: FunctionComponent = () => {
    let [ isMenuOpen, setMenuOpen ] = useLocalStorage<boolean>('IsMenuOpen', false)
    let [ width ] = useLocalStorage<number>('NavigationDrawer-Width', 8 * 30)
    let [ isMobile ] = useMobile()
    let [ title ] = useTitle()

    let menus = [
        { title: 'Home', icon: 'home', exact: true, path: '/', component: <HomeView/> }
    ]

    return (
        <div
            className={classNames(
                'App',
                isMenuOpen && 'NavigationDrawer-open',
                'ApplicationBar-Parent'
            )}
            style={{ marginLeft: !isMobile && isMenuOpen ? width : null }}
        >
            <Router>
                <ApplicationBar
                    isMenuOpen={isMenuOpen}
                    setMenuOpen={setMenuOpen}
                >
                    <ApplicationBar.Title>
                        {title}
                    </ApplicationBar.Title>
                    <div style={{ width: 8 * 7 }}/>
                </ApplicationBar>
                <NavigationDrawer
                    isOpen={isMenuOpen}
                    setOpen={setMenuOpen}
                >
                    <List>
                        {menus.map(menu => (
                            <Tooltip
                                key={menu.title}
                                title={menu.title}
                                origin={!isMobile && width <= 56 * 2 ? 'left' : undefined}
                                render={(setRef: TooltipSetRef) =>
                                    <List.Item
                                        setRef={setRef}
                                        icon={<Icon name={menu.icon}/>}
                                        element={NavLink}
                                        to={menu.path}
                                        elementProps={{
                                            activeClassName: 'active',
                                            exact: menu.exact
                                        }}
                                        className='menu'
                                        tabIndex={!isMenuOpen ? -1 : undefined}
                                        onClick={isMobile ? setMenuOpen.bind(null, false) : undefined}
                                    >
                                        {menu.title}
                                    </List.Item>
                                }
                            />
                        ))}
                    </List>
                </NavigationDrawer>

                <Switch>
                    {menus.map(menu => (
                        <Route key={menu.title} path={menu.path} exact={menu.exact}> {menu.component} </Route>
                    ))}
                </Switch>
            </Router>
        </div>
    )
}

export default App
