const path = require("path");
const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
require("dotenv").config();

let mode = "development";

const babelPlugins = [];
const webpackPlugins = [
  new MiniCssExtractPlugin(),
  new HtmlWebpackPlugin({
    template: "src/index.html",
  }),
];

if (process.env.NODE_ENV === "production") {
  mode = "production";
} else {
  babelPlugins.push("react-refresh/babel");
}

if (process.env.SERVE) {
  webpackPlugins.push(new ReactRefreshWebpackPlugin());
}

module.exports = {
  entry: "./src/index.js",

  devServer: {
    static: {
      directory: path.join(__dirname, "dist"),
    },
    compress: true,
    port: 9000,
    hot: true,
  },

  output: {
    path: path.resolve(__dirname, "dist"),
    assetModuleFilename: "images/[hash][ext][query]",
    clean: true,
    // asyncChunks: true,
  },

  mode: mode,

  module: {
    rules: [
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        type: "asset",
        // parser: {
        //   dataUrlCondition: {
        //     maxSize: 30 * 1024, // 30kb
        //   },
        // },
      },

      {
        test: /\.(?:jsx?|mjs|cjs)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              ["@babel/preset-env", { targets: "defaults" }],
              ["@babel/preset-react", { runtime: "automatic" }],
            ],
            plugins: babelPlugins,
          },
        },
      },

      {
        test: /\.(s[ac]|c)ss$/i,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          "postcss-loader",
          "sass-loader",
        ],
        // use: ["style-loader", "css-loader"],
      },
    ],
  },

  plugins: webpackPlugins,

  // devtool: "source-map",

  resolve: {
    extensions: [".js", ".json", ".jsx"],
  },
};
