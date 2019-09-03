import React from 'react';
import { Switch } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import { routesConfig } from './RouteConfigs';

export const AppRouter: React.FC = () => {
    return (
        <main style={{ background: '#fff' }}>
            <Switch>
                {renderRoutes(routesConfig)}
            </Switch>
        </main>
    );
};
