const path = require('path');
var nodeModulesPath = path.resolve(__dirname, 'node_modules');
var webpack = require('webpack');

module.exports = {
    entry: {
        './App':'./src/App.tsx'
    },
    output: {
        filename: "[name].js",
        path: path.resolve(__dirname, 'dist')
    },
    devtool:'source-map',

    resolve: {
        extensions: [".ts", ".tsx", ".js", ".json"]
    },
    mode:'development',
    module: {
        rules: [
            // ts-loader: convert typescript (es6) to javascript (es6),
            // babel-loader: converts javascript (es6) to javascript (es5)
            {
                test: /\.tsx?$/,
                loaders: ['babel-loader','ts-loader'],
                exclude: [/node_modules/,nodeModulesPath]
            },
            // babel-loader for pure javascript (es6) => javascript (es5)
            {
                test: /\.(jsx?)$/,
                loaders: ['babel'],
                exclude: [/node_modules/,nodeModulesPath]
            },
            {
                test: /\.css$/,
                loader: 'style-loader',
                exclude: [/node_modules/,nodeModulesPath]
            }, 
            {
                test: /\.css$/,
                loader: 'css-loader',
                exclude: [/node_modules/,nodeModulesPath],
                query: {
                    modules: true,
                    localIdentName: '[name]__[local]___[hash:base64:5]'
                }
            }              
        ]
    },

    externals: {
        "react": "React",
        "react-dom": "ReactDOM"
    },

    watch: false,

    devServer: {
        contentBase: path.join(__dirname, "dist"),
        watchContentBase: true,
        compress: true,
        port: 9000
      }
    
}