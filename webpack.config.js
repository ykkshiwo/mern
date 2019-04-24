const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: {
        // app: './src/App.jsx',
        app: './client/Client.jsx',
        vendor: ['react', 'react-dom', 'whatwg-fetch', 'react-router-dom', 'react-router']
    },
    output: {
        path: path.resolve(__dirname, "statics"),
        filename: '[name].js'
    },
    module: {
        rules: [
            {
                test: /\.jsx$/,
                loader: 'babel-loader',
                options: {
                    presets: ['react', 'es2015']
                }
            },
        ]
    },
    plugins: [
        // new webpack.optimize.CommonsChunkPlugin({
        //     name: 'vendor',
        //     filename: 'vendor.bundle.js',
        // }),
    ],
    optimization: {
        splitChunks: {
            name: 'vender',
            filename: '[name].js',
        }
    },
    devServer: {
        port: 8000,
        contentBase: 'statics',
        proxy: {
            '**': {
                target: 'http://localhost:3000'
            },
            // '/api/*': {
            //     target: 'http://localhost:3000'
            // },
            // '/node_modules/*':{
            //     target: 'http://localhost:3000'
            // }
        },
        historyApiFallback: true,
    },
    devtool: 'source-map'
}