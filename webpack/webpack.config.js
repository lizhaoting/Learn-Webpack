var webpack = require('webpack');
var path = require('path');
module.exports = {
    entry: './index.js',
    output: {
        path: __dirname,
        filename: 'build.js'
    },
    mode: 'development',
    resolveLoader: {
        modules: ['node_modules', '../'],
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: {
                    loader: 'force-strict-loader',
                    options: {
                        sourceMap: true,
                    }
                }
            }
        ]
    },
}