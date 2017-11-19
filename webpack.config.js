const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');

const moduleOptions = {
    rules: [
        {
            test: /\.[jt]s(x?)$/,
            exclude: /node_modules/,
            use: [
                { loader: 'ts-loader' }
            ]
        },
    ]
};

const clientConfig = {
    target: 'web',
    entry: {
        app: ['./src/index.tsx'],
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/assets/'
    },
    plugins: [
        new HTMLWebpackPlugin({
            template: path.resolve(__dirname, 'src/index.html'),
            filename: 'index.html',
            inject: 'body',
        }),
    ],
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx']
    },
    devtool: 'inline-source-map',
    module: moduleOptions,
};

module.exports = clientConfig
