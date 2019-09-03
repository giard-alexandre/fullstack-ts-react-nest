import { RouteConfig } from 'react-router-config';
import { About } from '../../About/About';
import { Home } from '../../Home/Home';
import { UserList } from '../../User/UserList';

export const routesConfig: RouteConfig[] = [
    {
        path: '/',
        component: Home,
        exact: true,
        breadcrumbName: 'Home'
    },
    {
        path: '/about',
        component: About
    },
    {
        path: '/users',
        component: UserList,
        breadcrumbName: 'Users',
        routes: [
            {
                path: '/users/:userName'
            }
        ]
    }
];
