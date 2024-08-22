const CopyWebpackPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCSSExtractPlugin = require('mini-css-extract-plugin')
const path = require('path')
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
 
module.exports = {
    entry: path.resolve(__dirname, '../src/script.js'),
    output:
    {
        hashFunction: 'xxhash64',
        filename: 'bundle.[contenthash].js',
        path: path.resolve(__dirname, '../dist'),
        clean: true,
        // publicPath: '',
    },
    devtool: 'source-map',
    plugins:
    [
        new CopyWebpackPlugin({
            patterns: [
                { from: path.resolve(__dirname, '../static') }
            ]
        }),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, '../src/index.html'),
            minify: true
        }),
        new MiniCSSExtractPlugin(),
        // new BundleAnalyzerPlugin(),
    ],
 
    // resolve: {
    //     fallback: {
    //         "fs": false
    //     },
    // },
 
    module:
    {
        rules:
        [
            // HTML
            {
                test: /\.(html)$/,
                use: ['html-loader']
            },
 
            // JS
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    },
                },
            },
 
            // CSS
            {
                test: /\.css$/,
                use: [MiniCSSExtractPlugin.loader, 'css-loader']
            },
            {
                test: /\.scss$/,
                use: ['style-loader', 'css-loader', 'sass-loader'],
            },
 
            // Images
            {
                test: /\.(jpg|png|gif|svg)$/i,
                type: 'asset/resource',
                generator:
                {
                    filename: 'assets/images/[hash][ext][query]'
                }
            },
 
            // Fonts
            {
                test: /\.(ttf|eot|woff|woff2)$/,
                type: 'asset/resource',
                generator:
                {
                    filename: 'assets/fonts/[hash][ext][query]'
                }
            },
 
            // Shaders
            {
                test: /\.(glsl|vs|fs|vert|frag)$/,
                type: 'asset/source',
                generator:
                {
                    filename: 'assets/images/[hash][ext][query]'
                }
            },
           
            // MP3
            {
                test: /\.(mp3)$/,
                type: 'asset/resource',
                generator:
                {
                    filename: 'assets/audios/[hash][ext][query]'
                }
            }
        ]
    }
}