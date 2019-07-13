import Grid from '@material-ui/core/Grid';
import React from 'react';
import { hot } from 'react-hot-loader';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { About } from './components/About';
// Pages
import { Header } from './components/Header';
import { Home } from './components/Home/Home';

const AppImpl = () => (
    <BrowserRouter>
        <div>
            <Grid container spacing={1}>
                <Header />
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route path='/about' component={About} />
                </Switch>
            </Grid>
        </div>
    </BrowserRouter>
);

export const App = hot(module)(AppImpl);
