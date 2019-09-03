import { Breadcrumb } from 'antd';
import * as React from 'react';
import { matchRoutes, MatchedRoute } from 'react-router-config';
import { Link } from 'react-router-dom';

import { routesConfig } from './RouteConfigs';
import { useEffect, useState } from 'react';
import { withRouter, match } from 'react-router';

 export const AppBreadcrumbs: React.FC = withRouter(({history}) => {
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
    }
    
    useEffect(() => {
        // Get the route info
        const branch = matchRoutes(routesConfig, location.pathname);
        const breadcrumbs = branch.map((r, index) => {
            var bcName;
            if(r.route && r.route.breadcrumbName) {
                bcName = r.route.breadcrumbName;
            } else {
                bcName = getNameFromMatch(r);
            }
            return (
                <Breadcrumb.Item key={index}>
                    <Link to={r.match.url}>{bcName}</Link>
                </Breadcrumb.Item>
            )
        })
        setItems(breadcrumbs);
      }, [history.location.pathname])

    return (
        <Breadcrumb style={{ margin: '16px 0' }}>
            {items}
        </Breadcrumb>
    );
});
