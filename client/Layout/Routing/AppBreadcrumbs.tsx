import { Breadcrumb } from 'antd';
import React, { ComponentClass } from 'react';
import withBreadcrumbs, { BreadcrumbsRoute } from 'react-router-breadcrumbs-hoc';
import { NavLink } from 'react-router-dom';

import { routesConfig } from './RouteConfigs';

export const AppBreadcrumbs: ComponentClass = withBreadcrumbs(routesConfig as BreadcrumbsRoute[])(({ breadcrumbs }) => {
    return (
        <Breadcrumb style={{ margin: '16px 0' }}>
            {breadcrumbs.map(({
                                  match,
                                  breadcrumb
                                  // other props are available during render, such as `location`
                                  // and any props found in your route objects will be passed through too
                              }) => (
                <Breadcrumb.Item key={match.url}>
                    <NavLink to={match.url}>{breadcrumb}</NavLink>
                </Breadcrumb.Item>
            ))}
        </Breadcrumb>
    );
});
