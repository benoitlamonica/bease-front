import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Doc from '../pages/Doc';
import Error404 from '../pages/Error404';
import GettingStarted from '../pages/GettingStarted';
import Home from '../pages/Home';

const routes = [
    {
        path: '/',
        component: <Home />
    },
    {
        path: '/doc',
        component: <Doc />
    },
    {
        path: '/getstarted',
        component: <GettingStarted />
    },
    {
        path: '*',
        component: <Error404 />
    }
];

function buildRoutes() {
    return routes.map((route, key) => {
        let exact = route.path === '/' ? true : false;
        return (
            <Route key={key} exact={exact} path={route.path}>
                {route.component}
            </Route>
        )
    })
}

const RouteContent = () => <Switch>{buildRoutes()}</Switch>;


export default RouteContent;