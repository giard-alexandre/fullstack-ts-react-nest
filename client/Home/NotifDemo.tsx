import { Button, Card, notification } from 'antd';
import * as React from 'react';

export const NotifDemo: React.FunctionComponent = () => {

    const openNotificationWithIcon = type => {
        notification[type]({
            message: 'Notification Title',
            description:
                'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
        });
    };

    return (
        <Card title='Notification Demo'>
            <Button onClick={() => openNotificationWithIcon('success')}>Success</Button>
            <Button onClick={() => openNotificationWithIcon('info')}>Info</Button>
            <Button onClick={() => openNotificationWithIcon('warning')}>Warning</Button>
            <Button onClick={() => openNotificationWithIcon('error')}>Error</Button>
        </Card>
    );
};
