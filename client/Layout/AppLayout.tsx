import { Layout } from 'antd';
import * as React from 'react';
import { Dispatch, SetStateAction } from 'react';
import { AppHeader } from './AppHeader';
import { AppSider } from './AppSider';
import { AppBreadcrumbs } from './Routing/AppBreadcrumbs';
import { AppRouter } from './Routing/AppRouter';

const {Content, Footer} = Layout;

export interface ILayoutProps {
    state: {
        drawer: {
            collapsed: [boolean, Dispatch<SetStateAction<boolean>>],
            collapsedWidth: [number, Dispatch<SetStateAction<number>>]
        };
    };
}

export const AppLayout: React.FC = () => {
    const drawerState = {
        drawer: {
            collapsed: React.useState<boolean>(false),
            collapsedWidth: React.useState<number>(80)
        }
    };

    return (
        <Layout hasSider={true} style={{minHeight: '100vh'}}>
            <AppSider state={drawerState} />
            <Layout>
                <AppHeader state={drawerState} />
                <Content style={{padding: '0 16px', marginTop: 64}}>
                    <AppBreadcrumbs />
                    <AppRouter />
                </Content>
                <Footer style={{textAlign: 'center'}}>DRW ©2019 Created by Alexandre Giard</Footer>
            </Layout>
        </Layout>
    );
};
