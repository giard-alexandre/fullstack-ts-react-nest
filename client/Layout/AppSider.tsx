import { Icon, Layout, Menu } from 'antd';
import React, { FC, useEffect, useState } from 'react';
import { matchRoutes } from 'react-router-config';
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
        const selectedRoutes = branch.map(r => r.match.url);
        setSelectedKeys(selectedRoutes);
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
                  defaultSelectedKeys={['/']}
                  selectedKeys={selectedKeys}
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
                        <Icon type='team' />
                        <span>Users</span>
                    </NavLink>
                </Menu.Item>
                <SubMenu
                    key='/admin'
                    title={
                        <span>
                            <Icon type='fire' />
                            <span>Admin</span>
                        </span>
                    }
                >
                    <Menu.Item key='/admin/nothing'>
                        <NavLink to='/admin/nothing'>
                            <Icon type='copy' />
                            <span>Nothing</span>
                        </NavLink>
                    </Menu.Item>
                    <Menu.Item key='/admin/should'>
                        <NavLink to='/admin/should'>
                            <Icon type='read' />
                            <span>Should</span>
                        </NavLink>
                    </Menu.Item>
                    <Menu.Item key='/admin/happen'>
                        <NavLink to='/admin/happen'>
                            <Icon type='meh' />
                            <span>Happen</span>
                        </NavLink>
                    </Menu.Item>
                </SubMenu>
            </Menu>
        </Sider>
    );
});
