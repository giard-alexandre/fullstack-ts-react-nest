import react from 'react';
import { RouteConfig } from 'react-router-config';
import { About } from '../../About/About';
import { Home } from '../../Home/Home';
import { UserList } from '../../User/UserList';

const routesConfig: RouteConfig[] = [
    {
        path: '/',
        component: Home,
        exact: true
    },
    {
        path: '/about',
        component: About
    },
    {
        path: '/users',
        component: UserList
    }
];

export default routesConfig;
