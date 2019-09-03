import { Icon, Layout, Menu } from 'antd';
import React, { FC, useEffect, useState } from 'react';
import { matchRoutes } from "react-router-config";
import { NavLink, withRouter } from 'react-router-dom';
import { ILayoutProps } from './AppLayout';
import styles from './AppSider.less';
import { routesConfig } from './Routing/RouteConfigs';

const { Sider } = Layout;
const { SubMenu } = Menu;

export const AppSider: FC<ILayoutProps> = withRouter(props => {
    const {
        collapsed: [drawerCollapsed, setDrawerCollapsed],
        collapsedWidth: [drawerCollapsedWidth, setDrawerCollapsedWidth]
    } = props.state.drawer;
    const location = props.location;
    const [selectedKeys, setSelectedKeys] = useState<string[]>(['/']);

    const onCollapse = collapsed => {
        setDrawerCollapsed(collapsed);
    };

    const onBreakpoint = breakpoint => {
        setDrawerCollapsedWidth(breakpoint ? 0 : 80);
    };

    useEffect(() => {
        // Get the route info
        const branch = matchRoutes(routesConfig, location.pathname);
        // setItems(breadcrumbs);
        // map(r => r.match.path)
        console.log(branch);
    }, [location.pathname]);

    return (
        <Sider trigger={null}
               breakpoint='md'
               onBreakpoint={onBreakpoint}
               collapsedWidth={drawerCollapsedWidth}
               collapsible
               collapsed={drawerCollapsed}
               onCollapse={onCollapse}>
            <div className={styles.logo} />
            <Menu theme='dark' mode='inline'
                // defaultSelectedKeys={['/']}
                // selectedKeys={[location.pathname]}
            >
                <Menu.Item key='/'>
                    <NavLink to='/'>
                        <Icon type='home' />
                        <span>Home</span>
                    </NavLink>
                </Menu.Item>
                <Menu.Item key='/about'>
                    <NavLink to='/about'>
                        <Icon type='file-search' />
                        <span>About</span>
                    </NavLink>
                </Menu.Item>
                <Menu.Item key='/users'>
                    <NavLink to='/users'>
                        <Icon type='user' />
                        <span>Users</span>
                    </NavLink>
                </Menu.Item>
                <SubMenu
                    key='sub1'
                    title={
                        <span>
                  <Icon type='user' />
                  <span>Fake User</span>
                </span>
                    }
                >
                    <Menu.Item key='4'>Fake</Menu.Item>
                    <Menu.Item key='5'>Fake2</Menu.Item>
                    <Menu.Item key='6'>Fake3</Menu.Item>
                </SubMenu>
            </Menu>
        </Sider>
    );
});
