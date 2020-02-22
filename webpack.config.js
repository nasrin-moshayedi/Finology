const path = require("path");
const HWP = require("html-webpack-plugin");
module.exports = {
    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'index_bundle.js',
        publicPath: '/'
},
module:{
    rules: [
        {
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            loader: "babel-loader"
        },
        {
            test: /\.(png|jpe?g|gif|svg)$/,
            loader: 'file-loader',
            options: {
                name(file) {
                    return '[path][name].[ext]';
                },
            },
        },
        {
            test: /\.(sc|c)ss$/,
            use: [
                 'style-loader',
                'css-loader',
                'sass-loader'
            ],
            exclude: /\.module\.css$/
        },
        {
            test: /\.(eot|woff|woff2|ttf)$/,
            loaders: [
                'url-loader'
            ]
        },
    ]
},
    resolve: {
        extensions: [
            '.js',
            '.jsx'
        ]
    },
    devServer: {
        contentBase: './dist',
        historyApiFallback: true,
    },
    plugins:[
        new HWP(
            {
                title: 'Sperlus',
                template: "./public/index.html"
            }
        )
    ]
};