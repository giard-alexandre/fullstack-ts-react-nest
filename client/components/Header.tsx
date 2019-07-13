import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';
import * as React from 'react';
import { Link as RouterLink } from 'react-router-dom';

export const Header: React.FunctionComponent = () => (
    <AppBar position='static'>
        <Toolbar>
            <Button color='inherit' component={RouterLink} to='/' href=''>
                Home
            </Button>
            <Button color='inherit' component={RouterLink} to='/about' href=''>
                About
            </Button>
        </Toolbar>
    </AppBar>
);
