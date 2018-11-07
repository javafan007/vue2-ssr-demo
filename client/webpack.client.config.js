const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const webpackConfig = require('./webpack.base.config');
const VueSSRClientPlugin = require('vue-server-renderer/client-plugin');

module.exports = merge(webpackConfig, {
    entry: {
        'client-bundle': './client-entry.js'
    },
    output: {
        publicPath: '/',
        filename: '[name].js'
    },
    plugins: [
        new VueSSRClientPlugin()
    ],
    optimization: {
        splitChunks: {
            cacheGroups: {
                commons: {
                    name: "manifest",
                    chunks: "initial",
                    minChunks: Infinity
                }
            }
        }
    }
});
