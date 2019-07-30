import { Icon, Layout } from 'antd';
import * as React from 'react';
import { ILayoutProps } from './AppLayout';
import styles from './AppHeader.less';

const {Header} = Layout;

export const AppHeader: React.FC<ILayoutProps> = props => {

    const {
        collapsed: [drawerCollapsed, setDrawerCollapsed]
    } = props.state.drawer;

    const toggle = () => {
        setDrawerCollapsed(!drawerCollapsed);
    };

    return (
        <Header style={{position: 'fixed', zIndex: 1, width: '100%', background: '#fff', padding: 0}}>
            <Icon
                className={styles.trigger}
                type={drawerCollapsed ? 'menu-unfold' : 'menu-fold'}
                onClick={toggle}
            />
        </Header>
    );
};
