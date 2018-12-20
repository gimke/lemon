const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

const env = process.env.NODE_ENV || 'development';

module.exports = {
    mode: env,
    entry: {
        bundle: './site/main.js'
    },
    output: {
        path: path.resolve(__dirname, './site/static/dist'),
        filename: '[name].js',
        publicPath: env === 'development' ? '/static/dist' : '//s.gimke.com/static/dist',
        library: "console"
    },
    // resolve: {
    //     alias: {
    //         "@": path.resolve(__dirname, './')
    //     }
    // },
    // externals: {
    //     config: function () {
    //         return JSON.stringify(require('./config/' + env + '.json'));
    //     }()
    // },
    optimization: {
        minimizer: [
            new UglifyJsPlugin({
                cache: true,
                parallel: true,
                sourceMap: false // set to true if you want JS source maps
            }),
            new OptimizeCSSAssetsPlugin({})
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'lemon',
            hash: true,
            inject: false,
            filename: 'index.html',
            template: './site/index.html'
        }),
        new MiniCssExtractPlugin({
            filename: '[name].css',
            disable: false,
            allChunks: true
        }),
        new webpack.DefinePlugin({
            'process.env': {NODE_ENV: JSON.stringify(env)}
        })
    ],
    module: {
        rules: [{
            test: /\.js?$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env', "@babel/preset-react"],
                    plugins: [
                        '@babel/plugin-proposal-class-properties',
                        ['import',
                            {
                                libraryName: '@gimke/lemon',
                                style: true
                            }
                        ]]
                }
            }
        }, {
            test: /.css$/,
            use: [
                MiniCssExtractPlugin.loader,
                'css-loader',
                {
                    loader: 'postcss-loader',
                    options: {
                        ident: 'postcss',
                        plugins: (loader) => [
                            require('postcss-preset-env')({
                                autoprefixer: {grid: true},
                                stage: 0,
                                features: {
                                    'nesting-rules': true
                                }
                            }),
                        ]
                    }
                }
            ]
        }, {
            test: /.less$/,
            use: [
                MiniCssExtractPlugin.loader,
                'css-loader',
                {
                    loader: 'postcss-loader',
                    options: {
                        ident: 'postcss',
                        plugins: (loader) => [
                            require('postcss-preset-env')({
                                autoprefixer: {grid: true},
                                stage: 0,
                                features: {
                                    'nesting-rules': true
                                }
                            }),
                        ]
                    }
                },
                {
                    loader: 'less-loader',
                    options: {
                        javascriptEnabled: true,
                    }
                }
            ]
        }]
    }
};