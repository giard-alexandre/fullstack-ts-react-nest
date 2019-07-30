import * as React from 'react';
import { Route, Switch } from 'react-router-dom';
import { About } from '../../About/About';
import { Home } from '../../Home/Home';
import { UserList } from '../../User/UserList';

export const AppRouter: React.FC = () => {
    return (
        <main style={{background: '#fff'}}>
            <Switch>
                <Route exact path='/' component={Home} />
                <Route path='/about' component={About} />
                <Route path='/users' component={UserList} />
            </Switch>
        </main>
    );
};
