import { BreadcrumbsRoute } from 'react-router-breadcrumbs-hoc';
import { RouteConfig } from 'react-router-config';
import { About } from '../../About/About';
import { Home } from '../../Home/Home';
import { UserList } from '../../User/UserList';

export const routesConfig: Array<RouteConfig | Partial<BreadcrumbsRoute>> = [
    {
        path: '/',
        component: Home,
        exact: true,
        breadcrumb: 'Home'
    },
    {
        path: '/about',
        component: About
    },
    {
        path: '/users',
        component: UserList,
        breadcrumb: 'Users',
        routes: [
            {
                path: '/users/:userName'
            }
        ]
    }
];
