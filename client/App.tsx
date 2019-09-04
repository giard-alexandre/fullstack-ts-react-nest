import { notification } from 'antd';
import React from 'react';
import { hot } from 'react-hot-loader';
import { BrowserRouter } from 'react-router-dom';

import './App.less';
import { AppLayout } from './Layout/AppLayout';
// Pages

notification.config({
    placement: 'topRight',
    top: 72,
    duration: 5,
});

const AppImpl: React.FC = () => {
    return (
        <BrowserRouter>
            <div className='app'>
                <AppLayout />
            </div>
        </BrowserRouter>
    );
};

export const App = hot(module)(AppImpl);
