import { Card, Col, Row } from 'antd';
import Typography from 'antd/lib/typography';
import React from 'react';

import styles from './Home.less';
import { NotifDemo } from './NotifDemo';

const { Text } = Typography;
const logoImg = require('../../assets/images/logo.png');

export const Home: React.FC = () => {
    return (
            <Row style={{padding: 24, background: '#fff', minHeight: 360}} gutter={6}
                 type='flex' justify='start'>
                <Col xs={24} md={12}>
                    <Card title='FullStack React with TypeScript'>
                        <img src={logoImg} className={styles.logo} alt='' />
                        <Text type='secondary'>
                            This is a starter kit to get you up and running with React &
                            TypeScript on top of material-ui.
                        </Text>
                        <Typography>
                            You can read more about how to share code between the client and the
                            server at my{' '}
                            <a href='https://medium.com/front-end-hacking/client-server-and-shared-code-846097c5260e'>
                                medium blog post
                            </a>
                            .
                        </Typography>
                    </Card>
                </Col>
                <Col xs={24} md={12}>
                    <NotifDemo />
                </Col>
            </Row>
    );
};
