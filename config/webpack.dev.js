const {merge} = require("webpack-merge");
const common = require("./webpack.common");
const {SERVER_HOST, SERVER_PORT} = require("./constant");

module.exports = merge(common, {
    mode: "development",
    devtool: "cheap-module-source-map",
    devServer: {
        host: SERVER_HOST,
        port: SERVER_PORT,
        compress: true,
        open: true,
        hot: true
    }
});