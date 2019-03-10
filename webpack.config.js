const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const postcssPresetEnv = require('postcss-preset-env');
const postcssImport = require('postcss-import');
const postcssColor = require('postcss-color-function');
const postcssCustomProperties = require('postcss-custom-properties');

const env = process.env.NODE_ENV || 'development';
const filename = env === 'development' ? '[name]' : '[hash]/[name]';
const publicPath = env === 'development' ? '' : '/static/dist/';
const postcssLoader = {
    loader: 'postcss-loader',
    options: {
        ident: 'postcss',
        plugins: (loader) => [
            postcssImport(),
            postcssCustomProperties({
                importFrom: './site/config/var.css',
                preserve: false
            }),
            postcssColor(),
            postcssPresetEnv({
                autoprefixer: {grid: true},
                stage: 3,
                features: {
                    'nesting-rules': true
                }
            })
        ]
    }
};
const babelLoader = {
    loader: 'babel-loader',
    options: {
        presets: ['@babel/preset-env', "@babel/preset-react"],
        plugins: [
            '@babel/plugin-proposal-class-properties',
            '@babel/plugin-syntax-dynamic-import',
            ['import', {libraryName: 'antd', style: true}, "antd"],
            ['import', {libraryName: 'lemon-ui', style: true}, "lemon-ui"],
        ]
    }
};

module.exports = {
    mode: env,
    entry: {
        console: './site/main.js'
    },
    output: {
        path: path.resolve(__dirname, './static'),
        filename: filename + '.js',
        publicPath: publicPath
    },
    // resolve: {
    //     alias: {
    //         "@": path.resolve(__dirname, './')
    //     }
    // },
    externals: {
        config: function () {
            return JSON.stringify(require('./site/config/' + env + '.json'));
        }(),
    },
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
            title: '工作台',
            hash: false,
            inject: false,
            filename: 'console.html',
            template: './site/index.html'
        }),
        new MiniCssExtractPlugin({
            filename: filename + '.css',
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
            use: [babelLoader]
        }, {
            test: /.css$/,
            use: [
                MiniCssExtractPlugin.loader,
                'css-loader',
                postcssLoader,
            ]
        }, {
            test: /.less$/,
            use: [
                MiniCssExtractPlugin.loader,
                'css-loader',
                postcssLoader,
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