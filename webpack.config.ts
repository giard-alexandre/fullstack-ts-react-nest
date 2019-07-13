import cssnano from 'cssnano';
import OpenBrowserPlugin from 'open-browser-webpack-plugin';
import path from 'path';
import * as webpack from 'webpack';
// noinspection ES6UnusedImports
import * as webpackDevServer from 'webpack-dev-server';
import ManifestPlugin from 'webpack-manifest-plugin';

import { IS_DEV, SERVER_PORT, WEBPACK_PORT } from './server/config';

const plugins = [new ManifestPlugin()];

// import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';
// plugins.push(new BundleAnalyzerPlugin());

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
                test: /\.css$/,
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
                        loader: 'postcss-loader',
                        options: {
                            sourceMap: IS_DEV,
                            plugins: IS_DEV ? [cssnano()] : [],
                        },
                    },
                ],
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
