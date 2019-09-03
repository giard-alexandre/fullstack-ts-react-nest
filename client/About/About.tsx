import { Card } from 'antd';
import Typography from 'antd/lib/typography';
import React from 'react';

const {Paragraph} = Typography;

export const About: React.FC = () => {
    return (
        <Card title='Created by Gil Amran'>
            <Paragraph type='secondary'>
                Heavily Modified to NestJs by Alexandre Giard
            </Paragraph>
            <Paragraph >
                You can find information at{' '}
                <a href='https://github.com/gilamran/fullstack-typescript'>https://github.com/gilamran/fullstack-typescript</a>
            </Paragraph>
            <Paragraph >
                Or, for this specific starter{' '}
                <a href='https://github.com/heuristicAL/fullstack-ts-react-nest'>https://github.com/heuristicAL/fullstack-ts-react-nest</a>
            </Paragraph>
        </Card>
    );
};
