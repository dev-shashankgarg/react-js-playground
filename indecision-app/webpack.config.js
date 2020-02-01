const path = require('path')

module.exports = {
    entry: {
        main: './src/index.js',
        practice1: './src/practice1.js'
    },
    output: {
        path: path.resolve(__dirname, 'public/scripts/'),
        filename: '[name]-bundle.js'
    },
    module: {
        rules: [{
            test: /\.js$/,
            exclude : /node_modules/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/env', '@babel/react'],
                    plugins: ["@babel/plugin-proposal-class-properties"]
                }
            }
        }]
    },
    devServer: {
        contentBase: path.resolve(__dirname, 'public'),
        publicPath: '/scripts/'
    },
    devtool: 'source-map'

}