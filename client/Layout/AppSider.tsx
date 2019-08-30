import { Icon, Layout, Menu } from 'antd';
import * as React from 'react';
import { Link } from 'react-router-dom';
import { ILayoutProps } from './AppLayout';
import styles from './AppSider.less';

const { Sider } = Layout;
const { SubMenu } = Menu;

export const AppSider: React.FC<ILayoutProps> = props => {
    const {
        collapsed: [drawerCollapsed, setDrawerCollapsed],
        collapsedWidth: [drawerCollapsedWidth, setDrawerCollapsedWidth]
    } = props.state.drawer;

    const onCollapse = collapsed => {
        setDrawerCollapsed(collapsed);
    };

    const onBreakpoint = breakpoint => {
        setDrawerCollapsedWidth(breakpoint ? 0 : 80);
    };

    return (
        <Sider trigger={null}
               breakpoint='md'
               onBreakpoint={onBreakpoint}
               collapsedWidth={drawerCollapsedWidth}
               collapsible
               collapsed={drawerCollapsed}
               onCollapse={onCollapse}>
            <div className={styles.logo} />
            <Menu theme='dark' defaultSelectedKeys={['1']} mode='inline'>
                <Menu.Item key='1'>
                    <Icon type='home' />
                    <span>Home</span>
                    <Link to='/' />
                </Menu.Item>
                <Menu.Item key='2'>
                    <Icon type='file-search' />
                    <span>About</span>
                    <Link to='/about' />
                </Menu.Item>
                <Menu.Item key='3'>
                    <Icon type='user' />
                    <span>Users</span>
                    <Link to='/users' />
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
};
