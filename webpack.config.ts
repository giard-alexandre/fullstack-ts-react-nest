const cssnano = require('cssnano');
import * as fs from 'fs';
const OpenBrowserPlugin = require('open-browser-webpack-plugin');
import * as path from 'path';
import * as webpack from 'webpack';
// noinspection ES6UnusedImports
const webpackDevServer = require('webpack-dev-server');

import { IS_DEV, SERVER_PORT, WEBPACK_PORT } from './server/config';

const ManifestPlugin = require('webpack-manifest-plugin');

const plugins = [new ManifestPlugin()];

const lessToJs = require('less-vars-to-js');
const themeVariables = lessToJs(fs.readFileSync(path.join(__dirname, './ant-theme-vars.less'), 'utf8'));

// import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';
// plugins.push(new BundleAnalyzerPlugin());

console.log(`IS DEV ${IS_DEV}`);

if (IS_DEV) {
    plugins.push(new OpenBrowserPlugin({url: `http://localhost:${SERVER_PORT}`}));
}

const nodeModulesPath = path.resolve(__dirname, 'node_modules');

const config: webpack.Configuration = {
    mode: IS_DEV ? 'development' : 'production',
    devtool: IS_DEV ? 'inline-source-map' : false,
    entry: ['@babel/polyfill', './client/client'],
    output: {
        path: path.join(__dirname, 'dist', 'statics'),
        filename: `[name]-[hash:8]-bundle.js`,
        publicPath: '/statics/',
    },
    resolve: {
        alias: {'react-dom': '@hot-loader/react-dom'},
        extensions: ['.js', '.ts', '.tsx'],
    },
    optimization: {
        splitChunks: {
            cacheGroups: {
                commons: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'vendors',
                    chunks: 'all',
                },
            },
        },
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loaders: ['babel-loader'],
                exclude: [/node_modules/, nodeModulesPath],
            },
            {
                test: /\.less$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'style-loader',
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true,
                            camelCase: true,
                            sourceMap: IS_DEV,
                        },
                    },
                    {
                        loader: 'less-loader',
                        options: {
                            javascriptEnabled: true,
                            // modifyVars: themeVariables,
                        }
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            sourceMap: IS_DEV,
                            plugins: IS_DEV ? [cssnano()] : [],
                        },
                    },
                ],
            },
            {
                test: /node_modules\/.*\.less$/,
                use: [
                    {
                        loader: 'style-loader',
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap: true,
                        },
                    },
                    {
                        loader: 'less-loader',
                        options: {
                            javascriptEnabled: true,
                            sourceMap: true,
                            // modifyVars: themeVariables,
                            // root: path.resolve(__dirname, './')
                        }
                    },
                ]
            },
            {
                test: /.jpe?g$|.gif$|.png$|.svg$|.woff$|.woff2$|.ttf$|.eot$/,
                use: 'url-loader?limit=10000',
            },
        ],
    },
    devServer: {
        port: WEBPACK_PORT,
    },
    plugins,
    externals: {},
};

export default config;
