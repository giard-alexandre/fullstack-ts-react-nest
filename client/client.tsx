import React from 'react';
import ReactDOM from 'react-dom';
import Favicon from 'react-favicon';
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
        <Favicon url={favicon}/>
        <App />
    </React.Fragment>
    , document.getElementById('app'));
