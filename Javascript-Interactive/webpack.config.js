/* global require __dirname module */
let path = require('path');
let ExtractTextPlugin = require("extract-text-webpack-plugin");
let conf = {
    //entry: './es6/lesson1/index.js',
    //entry: './es6/lesson1-hw/index-1.js',
    //entry: './es6/lesson1-hw/index-2.js',
    //entry: './es6/lesson1-hw/index-3.js',
    //entry: './es6/lesson2/index.js',
    //entry: './es6/lesson2-hw/index.js',
    // entry: './es6/lesson3/index.js',
   //entry: './es6/lesson3-hw/main.js',
    entry: './es6/lesson4/index.js',

    output: {
        path: path.resolve(__dirname, './js'),
        filename: 'main.js',
        publicPath: 'js/'
    },
    devServer: {
        overlay: true
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
               // exclude: '/node_modules/' // возможно задать исключения
            },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: "css-loader"
                })
                // use: [
                //     'style-loader',
                //     'css-loader'
                // ]
            },
            {
                test: /\.less$/,
                loader: 'less-loader', // compiles Less to CSS
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin("styles.css"),
    ]
};

module.exports = (env, options) => {
    conf.devtool = options.mode === "production" ?
                    false :
                    "cheap-module-eval-source-map";

    return conf;
};

