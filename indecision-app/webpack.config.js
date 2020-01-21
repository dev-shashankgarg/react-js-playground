const path = require('path')

module.exports = {
    entry: {
        main : './src/index.js',
        practice1 : './src/practice1.js'
    },
    output: {
        path: path.resolve(__dirname , 'public/scripts/'),
        filename: '[name]-bundle.js'
    },
    module: {
        rules: [{
            use : {
                loader : 'babel-loader',
                options : {
                    presets: ['@babel/env','@babel/react']
                }
            }
        }]
    },
    devServer : {
        contentBase: path.resolve(__dirname , 'public'),
        publicPath: '/scripts/'
    },
    devtool : 'source-map'

}