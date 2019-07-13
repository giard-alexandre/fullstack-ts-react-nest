import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import * as React from 'react';
import { NotifDemo } from './NotifDemo';

const css = require('./Home.css');
const logoImg = require('../../../assets/images/logo.png');

export const Home: React.FunctionComponent = () => (
    <Grid item xs={12}>
        <Card>
            <CardHeader title='FullStack React with TypeScript' />
            <CardContent>
                <img src={logoImg} className={css.logo} alt='' />
                <Typography variant='subtitle1'>
                    This is a starter kit to get you up and running with React &
                    TypeScript on top of material-ui.
                </Typography>
                <Typography>
                    You can read more about how to share code between the client and the
                    server at my{' '}
                    <a href='https://medium.com/front-end-hacking/client-server-and-shared-code-846097c5260e'>
                        medium blog post
                    </a>
                    .
                </Typography>
            </CardContent>
        </Card>
        <NotifDemo />
    </Grid>
);
