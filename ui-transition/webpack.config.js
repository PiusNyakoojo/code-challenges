let path = require('path');

let ExtractTextPlugin = require('extract-text-webpack-plugin');
let CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    context: path.resolve('app'),
    entry: ['./src/main.js'],
    output: {
        path: path.resolve('dist'),
        publicPath: '',
        filename: 'bundle.js'
    },
    plugins: [
		new ExtractTextPlugin('styles.css'),
        new CopyWebpackPlugin([
            { from: 'assets/images', to: 'assets/images' }
        ])
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
			},
            {
                test: /\.css$/,
                exclude: /node_modules/,
                loader: ExtractTextPlugin.extract("style-loader", "css-loader!autoprefixer-loader")
            },
            {
                test: /\.jpe?g$|\.gif$|\.png$|\.svg$/,
                exclude: /node_modules/,
                loader: "file"
            }
        ]
    },
    resolve: {
        extensions: ['', '.js']
    }
}