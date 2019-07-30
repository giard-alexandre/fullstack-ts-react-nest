import * as React from 'react';
import * as ReactDOM from 'react-dom';
// noinspection ES6UnusedImports
import { hot } from 'react-hot-loader';
import { App } from './App';

const favicon = require('../assets/images/logo.png');

// const theme = createMuiTheme({
//     palette: {
//         primary: indigo,
//         secondary: red,
//     }
// });

ReactDOM.render(
    <React.Fragment>
        <link rel='shortcut icon' type='image/x-icon' href={favicon} />
        <App />
    </React.Fragment>
    , document.getElementById('app'));
