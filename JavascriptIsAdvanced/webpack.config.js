let path = require('path');

let conf = {
    //entry: './pages/01-querySelector.js',
    //entry: './pages/02-addEventListener.js',
    //entry: './pages/03-typeDate.js',
    //entry: './pages/04-callback.js',
    //entry: './pages/05-context.js',
    //entry: './pages/06-class.js',
    //entry: './pages/07-prototypingInheritance.js',
    entry: './pages/08-jqueryAjax.js',
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
                // exclude: '/node_modules/'
            }
        ]
    }
};

module.exports = (env, options) => {
    conf.devtool = options.mode === "production" ?
        false :
        "cheap-module-eval-source-map";

    return conf;
};
// module.exports = {
//     plugins: [
//         new webpack.ProvidePlugin({
//             $: 'jquery',
//             jQuery: 'jquery'
//         }),
//     ]
// };