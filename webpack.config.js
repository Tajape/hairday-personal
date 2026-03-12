const path = require("path")
const HTMLWebPackPlugin = require('html-webpack-plugin')

module.exports ={
    target:  "web", 
    mode: "development",

    entry: path.resolve(__dirname, "src", "main.js"),
    output: {
        filename: "main.js",
        path: path.resolve(__dirname, "dist"),
    },

    devServer: {
        static: {
            directory: path.join(__dirname, "dist"),
        },
        port: 3000,
        open: true,
        liveReload: true,
    },

    plugins: [
        new HTMLWebPackPlugin({
            template: path.resolve(__dirname, "index.html"),
        }),
    ],
}

