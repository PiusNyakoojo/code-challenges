let path = require('path');

let ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    context: path.resolve('app/src'),
    entry: ['./main.js'],
    output: {
        path: path.resolve('dist'),
        publicPath: '',
        filename: 'bundle.js'
    },
    plugins: [
		new ExtractTextPlugin('styles.css')
	],
    devServer: {
        contentBase: 'app'
    },
    module: {
        preLoaders: [
            {
                test: /\.js$/,
                exclude: 'node_modules',
                loader: 'jshint-loader'
            }
        ],
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
			{
				test: /\.scss$/,
				exclude: /node_modules/,
				loader: ExtractTextPlugin.extract("style-loader", "css-loader!autoprefixer-loader!sass-loader")
			}
        ]
    },
    resolve: {
        extensions: ['', '.js']
    }
}