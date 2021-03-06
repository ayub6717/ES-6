const path = require('path');

const config = {
    entry: [
        './src/index.js',
        './src/let+const.js',
        './src/Template_String.js',
        './src/Arrow-function.js',
        './src/Lexical-this.js',
        './src/Object.js',
        './src/Destructuring.js',
        './src/Default-parameter.js',
        './src/Rest-operator.js',
        './src/Promise.js',
        './src/Map.js',
        './src/Symbols.js'
    ],
        output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/dist'
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                use: {
                    loader: 'babel-loader'
                }
            }
        ]
    }
}

module.exports = config;
