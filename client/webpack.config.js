const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")

module.exports = {
    entry: "./src/index.tsx",
    devServer: {
        port: 4100,
        historyApiFallback: true
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
        alias: {
            '@mainComponents': path.resolve(__dirname, 'src/components'),
            '@Utils': path.resolve(__dirname, 'src/utils'),
            '@Images': path.resolve(__dirname, 'src/assets/images/'),
            '@Api': path.resolve(__dirname, 'src/api'),
        }
    },
    module: {
        rules: [
            {
                test:/\.bundle\.ts$/,
                use: {
                    loader: "bundle-loader",
                    options: {
                        name: "[name]",
                    }
                }
            },
            {
                test: /\.tsx?$/,
                use: "ts-loader",
                exclude: /node-modules/
            },
            {
                test: /\.(svg|jpg|png|gif|ico)$/,
                exclude: /fonts/,
                use: "file-loader"
            },
            {
                test: /\.(ttf|eot|woff|woff2)$/,
                loader: 'file-loader'
            }
        ]
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, 'public', 'index.html')
        })
    ],

    output: {
        filename: "[name].js",
        path: path.resolve(__dirname, "build"),
        publicPath: "/"
    }

}


// npm i -D @types.ts/node @types.ts/webpack bundle-loader file-loader html-webpack-plugin ts-loader typescript webpack webpack-cli webpack-dev-api
// npm i @types.ts/react @types.ts/react-dom @types.ts/styled-components react react-dom styled-components styled-reset