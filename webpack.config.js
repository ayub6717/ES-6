const path = require('path');

const config = {
    entry: [
        './src/index.js',
        './src/let+const.js',
        './src/Template_String.js'
    ],
        output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
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