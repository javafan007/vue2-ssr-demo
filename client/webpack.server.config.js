const webpack = require('webpack')
const merge = require('webpack-merge')
const webpackConfig = require('./webpack.base.config')
const VueSSRServerPlugin = require('vue-server-renderer/server-plugin')


const result = merge(webpackConfig, {
    entry: './server-entry.js',
    target: 'node',
    output: {
        filename: 'server-bundle.js',
        libraryTarget: 'commonjs2'
    },
    plugins: [
      new VueSSRServerPlugin()
    ]
});

module.exports = result