const {resolve} = require("path");
const {PROJECT_PATH, isDev} = require("./constant");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: {
        index: resolve(PROJECT_PATH, "./src/index.tsx"),
    },
    output: {
        filename: `js/[name]${isDev ? "" : ".[hash:8]"}.js`,
        path: resolve(PROJECT_PATH, "./dist"),
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    "style-loader",
                    {
                        loader: "css-loader",
                        options: {
                            modules: false,
                            sourceMap: isDev,
                            importLoaders: 0,
                        },
                    },
                ],
            },
            {
                test: /\.(tsx?|js)$/,
                loader: "babel-loader",
                options: {
                    cacheDirectory: true,
                },
                exclude: /node_modules/,
            },

        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: resolve(PROJECT_PATH, "./public/index.html"),
            filename: "index.html",
            cache: false,
            minify: isDev ? false : {
                removeAttributeQuotes: true,
                collapseWhitespace: true,
                removeComments: true,
                collapseBooleanAttributes: true,
                collapseInlineTagWhitespace: true,
                removeRedundantAttributes: true,
                removeScriptTypeAttributes: true,
                removeStyleLinkTypeAttributes: true,
                minifyCSS: true,
                minifyJS: true,
                minifyURLs: true,
                useShortDoctype: true,
            },
        }),
    ],
    resolve: {
        extensions: ['.tsx', '.ts', '.js', '.json'],
        alias: {
            '@Components': resolve(PROJECT_PATH, './src/components'),
        },
    },
};
