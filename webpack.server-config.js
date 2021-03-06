const path = require('path');
const webpack = require('webpack');

module.exports = {
    target: 'node',
    entry: {
        // app: './src/App.jsx',
        app: ['./server/index.js','./node_modules/webpack/hot/poll?1000']
        // vendor: ['react', 'react-dom', 'whatwg-fetch', 'react-router-dom', 'react-router']
    },
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: '[name].bundle.js',
        libraryTarget: 'commonjs',
    },
    resolve: {
        extensions: ['*', '.js', '.jsx'],
    },
    externals: [/^[a-z]/],
    module: {
        rules: [
            {
                test: /\.jsx$/,
                loader: 'babel-loader',
                options: {
                    presets: ['react', 'es2015']
                }
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                options: {
                    presets: ['es2015']
                }
            },
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
    ],
    // optimization: {
    //     splitChunks: {
    //         name: 'vender',
    //         filename: '[name].js',
    //     }
    // },
    // devServer: {
    //     port: 8000,
    //     contentBase: 'statics',
    //     proxy: {
    //         '**': {
    //             target: 'http://localhost:3000'
    //         },
    //         // '/api/*': {
    //         //     target: 'http://localhost:3000'
    //         // },
    //         '/node_modules/*': {
    //             target: 'http://localhost:3000'
    //         }
    //     },
    //     historyApiFallback: true,
    // },
    devtool: 'source-map'
}