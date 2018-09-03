const webpack = require('webpack'); //to access built-in plugins
const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

// const autoprefixer = require('autoprefixer');

// const devEnv = 'development';
// const NODE_ENV = process.env.NODE_ENV || devEnv;


const config = {
    // context: path.resolve(__dirname, 'dist'),
    entry: path.resolve(__dirname, 'src/index'),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'js/app_bundle.js',
        publicPath: '/',
        //publicPath: 'http://localhost:9000/',
    },

    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        port: 9000,
        //stats: 'errors-only'
    },

    module: {
        rules: [
            {
                test: /\.html$/,
                loader: 'html-loader',
                options: {
                    minimize: false,
                    collapseWhitespace: false
                }
            },
/*            {
                test: /\.pug$/,
                use: ['html-loader?attrs=false', 'pug-html-loader']

            },*/
            {
                test: /\.pug$/,
                loaders: ['html-loader', 'pug-html-loader?exports=false']
            },
            {
                test: /\.(css|scss)$/,
                use: ExtractTextPlugin.extract({
                    publicPath: '/',
                    fallback: 'style-loader',
                    use: 'css-loader!sass-loader'
                })
            },
            {
                test: /\.(jpg|png|svg)$/,
                loader: 'file-loader',
                options: {
                    name: 'images/[name].[ext]'
                },
            },


        ]
    },


    plugins: [
        new HtmlWebpackPlugin({
            title: 'Deve my',
            filename: 'index.html',
            template: path.resolve(__dirname + '/src/home.html'),
        }),
        new ExtractTextPlugin({
            filename: 'stylesheets/[name].css'
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: "commons",
            // (the commons chunk name)

            filename: "commons.js",
            // (the filename of the commons chunk)

            // minChunks: 3,
            // (Modules must be shared between 3 entries)

            // chunks: ["pageA", "pageB"],
            // (Only use these entries)
        })
    ]
};

module.exports = config;


