import * as path from 'path';
import * as webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import StatoscopePlugin from '@statoscope/webpack-plugin';
import fs from 'fs';

// @todo загрузить переводы из файла
// const translates = require('./i18n.json');
// console.log('translates', translates);


const config: webpack.Configuration = {
    mode: 'production',
    entry: ['./src/pages/root.tsx', './src/pages/root2.tsx'],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].[contenthash].js',
        clean: true,
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "src/index.html",
        }),
        new StatoscopePlugin({
            saveStatsTo: 'stats.json',
            saveOnlyStats: false,
            open: false,
        }),
    ],

    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
        // @todo настроить resolve
    },
    module: {
        rules: [
            {
                test: /\.(tsx|ts)/i,
                use: ['ts-loader'],
                exclude: /node_modules/,
            },
            // @todo настроить загрузчик
        ],
    },
    resolveLoader: {
        alias: {
            'i18n-loader': path.resolve(__dirname, 'loaders/i18n-loader.cjs'),
        },
    },
};

export default config;
