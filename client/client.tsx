import { createMuiTheme, CssBaseline } from '@material-ui/core';
import { indigo, red } from '@material-ui/core/colors';
import { MuiThemeProvider } from '@material-ui/core/styles';
import { SnackbarProvider } from 'notistack';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
// noinspection ES6UnusedImports
import { hot } from 'react-hot-loader';
import { App } from './App';

const favicon = require('../assets/images/logo.png');

const theme = createMuiTheme({
    palette: {
        primary: indigo,
        secondary: red,
    }
});

ReactDOM.render(
    <React.Fragment>
        <link rel="shortcut icon" type="image/x-icon" href={favicon} />
        <CssBaseline />
        <MuiThemeProvider theme={theme}>
            <SnackbarProvider anchorOrigin={{vertical: 'bottom', horizontal: 'right'}}>
                <App />
            </SnackbarProvider>
        </MuiThemeProvider>
    </React.Fragment>
    , document.getElementById('app'));
