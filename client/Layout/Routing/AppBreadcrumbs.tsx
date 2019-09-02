import { Breadcrumb } from 'antd';
import * as React from 'react';
import { matchRoutes } from 'react-router-config';
import { RouteProps } from 'react-router';
import { routesConfig } from './RouteConfigs';

export const AppBreadcrumbs: React.FC<RouteProps> = () => {
    // Get the route info
    const branch = matchRoutes(routesConfig, location.pathname);
    return (
        <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>User</Breadcrumb.Item>
            <Breadcrumb.Item>Bill</Breadcrumb.Item>
        </Breadcrumb>
    );
};
