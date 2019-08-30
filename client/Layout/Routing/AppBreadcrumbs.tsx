import { Breadcrumb } from 'antd';
import * as React from 'react';

export const AppBreadcrumbs: React.FC = () => {
    return (
        <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>User</Breadcrumb.Item>
            <Breadcrumb.Item>Bill</Breadcrumb.Item>
        </Breadcrumb>
    );
};
