import { Breadcrumb } from 'antd';
import React, { ComponentClass, useEffect, useState } from 'react';
import { withRouter } from 'react-router';
import { MatchedRoute, matchRoutes } from 'react-router-config';
import { NavLink } from 'react-router-dom';

import { routesConfig } from './RouteConfigs';

export const AppBreadcrumbs: ComponentClass = withRouter(({ history }) => {
    const [items, setItems] = useState([]);

    const getNameFromMatch = (route: MatchedRoute<{}>) => {
        if (route.match.params
            && Object.keys(route.match.params)
            && Object.keys(route.match.params).length > 0) {
            const routeParamName = route.match.path.match(/([^\/:]*)\/*$/)[1];
            const param = route.match.params[routeParamName];
            return param
                ? param.charAt(0).toUpperCase() + param.substr(1)
                : '';
        }
        const matched = route.match.path.match(/([^\/]*)\/*$/)[1];
        return matched
            ? matched.charAt(0).toUpperCase() + matched.substr(1)
            : 'Home';
    };

    useEffect(() => {
        // Get the route info
        const branch = matchRoutes(routesConfig, history.location.pathname);
        const breadcrumbs = branch.map((r, index) => {
            let bcName;
            if (r.route && r.route.breadcrumbName) {
                bcName = r.route.breadcrumbName;
            } else {
                bcName = getNameFromMatch(r);
            }
            return (
                <Breadcrumb.Item key={index}>
                    <NavLink to={r.match.url}>{bcName}</NavLink>
                </Breadcrumb.Item>
            );
        });
        setItems(breadcrumbs);
    }, [history.location.pathname]);

    return (
        <Breadcrumb style={{ margin: '16px 0' }}>
            {items}
        </Breadcrumb>
    );
});
