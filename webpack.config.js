/* eslint-disable */
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
module.exports = {
    entry: ['react-hot-loader/patch', './src/index.tsx'],
    resolve: {
        alias: {
            'react-dom': '@hot-loader/react-dom',
        },
        extensions: ['.tsx', '.ts', '.js'],
    },

    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [
            {
                test: /\.(jsx|react\.js|js|tsx|ts)$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            cacheDirectory: true,
                            babelrc: true,
                        },
                    },
                ],
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: ['file-loader'],
            },
        ],
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            title: 'Website name',
            template: './public/index.html',
            inject: true,
            minify: {
                removeComments: true,
                collapseWhitespace: false,
            },
        }),
    ],
};
