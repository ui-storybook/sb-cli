var loaders = require("./loaders");
var BrowserSyncPlugin = require('browser-sync-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var webpack = require('webpack');
module.exports = {
    entry: {
        app: './sb/index.ts',
        stories: './sb/stories'
    },
    output: {
        filename: '[name].js',
        path: 'sb-dist'
    },
    resolve: {
        root: __dirname,
        extensions: ['', '.ts', '.js', '.json']
    },
    resolveLoader: {
        modulesDirectories: ["node_modules"]
    },
    devtool: "source-map",
    plugins: [
        new CopyWebpackPlugin([
            { from: './sb/static/preview.html', to: 'preview.html' },
            { from: './sb/static/index.html', to: 'index.html' }
        ]),
        new BrowserSyncPlugin({
            host: 'localhost',
            port: 8080,
            server: {
                baseDir: 'sb-dist'
            },
            ui: false,
            online: false,
            notify: false
        })
    ],
    module: {
        loaders: loaders
    }
};