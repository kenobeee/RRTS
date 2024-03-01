const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');
const {TsconfigPathsPlugin} = require('tsconfig-paths-webpack-plugin');
const CopyPlugin = require("copy-webpack-plugin");

const customPlugins = [
    new HtmlWebpackPlugin({
        title: 'siter',
        template: path.resolve(__dirname, './src/template.html'),
        filename: 'index.html',
    }),
    new CleanWebpackPlugin(),
    new ESLintPlugin({
        context: path.resolve(__dirname, '../'),
        extensions: ['js', 'ts'],
        failOnError: false,
        failOnWarning: false,
    }),
    new CopyPlugin({
        patterns: [
            {
                from: 'assets/',
                to: 'assets/',
                toType: 'dir'
            },
        ],
    }),
];

const customRules = [
    {
        test: /\.(tsx|ts)?$/,
        exclude: /node_modules/,
        use: ['ts-loader'],
    },
    {
        test: /\.(svg|png|jpg|jpeg|woff|woff2|otf|ttf|ogg|aac|mp3|mp4|wav|ico)$/,
        loader: 'file-loader',
        options: {
            esModule: false,
            toType: 'dir',
            name: '[path][name].[ext]'
        }
    },
];

module.exports = (env, options) => {
    const isProd = options.mode === 'production';

    return {
        optimization: {
            minimize: isProd,
        },
        entry: {
            main: path.resolve(__dirname, './src/index.ts'),
        },
        output: {
            path: path.resolve(__dirname, './dist'),
            filename: '[name].bundle.js',
        },
        plugins: customPlugins,
        module: {
            rules: customRules
        },
        resolve: {
            extensions: ['.ts', '.js', '.tsx', '.jsx', '.json'],
            plugins: [
                new TsconfigPathsPlugin({
                    baseUrl: 'src',
                    configFile: 'tsconfig.json'
                })
            ],
            alias: {
                '_assets': path.resolve(__dirname, 'assets'),
            }
        },
        devServer: {
            historyApiFallback: true,
            static: {
                directory: path.resolve(__dirname, './dist'),
            },
            open: false,
            https: isProd,
            compress: isProd,
            hot: true,
            port: 1236,
            client: {
                overlay: {
                    errors: true,
                    warnings: false,
                },
            }
        },
        stats: {
            assets: true
        }
    }
};