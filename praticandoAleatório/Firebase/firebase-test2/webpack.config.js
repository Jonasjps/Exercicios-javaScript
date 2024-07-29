const path = require('path')

module.exports = {
    mode: 'development',
    devtool: 'eval-source-map',
    entry: './src/app.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    }
}