var webpack = require('webpack');
var path = require('path');

var APP_DIR = path.join(__dirname, '..', 'app');

module.exports = {
    debug: true,
    devtool: 'source-map',
    entry: ['webpack-hot-middleware/client', './app/index.tsx'],
    module: {
        preLoaders: [{
            test: /\.tsx?$/,
            loader: 'tslint',
            include: APP_DIR
        }],
        loaders: [{
            test: /\.tsx?$/,
            loaders: ['babel', 'ts'],
            include: APP_DIR
        }, {
            test: /\.less$/,
            loader: 'style!css!autoprefixer!less'
        }]
    },
    output: {
        filename: 'app.js',
        path: path.join(__dirname, '..', 'build'),
        publicPath: '/static/'
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
    ],
    resolve: {
        root: [path.resolve('../app')],
        extensions: ['', '.jsx', '.js', '.tsx', '.ts']
    }
};
