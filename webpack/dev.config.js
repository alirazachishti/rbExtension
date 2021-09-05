const path = require("path");
const webpack = require("webpack");
const autoprefixer = require("autoprefixer");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const customPath = path.join(__dirname, "./customPublicPath");
const ASSET_PATH = process.env.ASSET_PATH || '/';
const alias = {
  "react-dom": "@hot-loader/react-dom",
  core: path.join(__dirname, "core"),
};

const baseDevConfig = {
  mode: "development",
  devtool: "eval-cheap-module-source-map",
  entry: {
    recorder: [
      customPath,
      path.join(__dirname, "../chrome/extension/recorder"),
    ],
    background: [
      customPath,
      path.join(__dirname, "../chrome/extension/background"),
    ],
  },
  output: {
    path: path.join(__dirname, "../dev/js"),
    filename: "[name].bundle.js",
    chunkFilename: "[id].chunk.js",
    publicPath: ASSET_PATH,
  },
  plugins: [
    new webpack.IgnorePlugin(/[^/]+\/[\S]+.prod$/),
    new webpack.ProgressPlugin(),
    new CleanWebpackPlugin({
      verbose: true,
      cleanStaleWebpackAssets: false,
    }),
    new webpack.EnvironmentPlugin(["NODE_ENV"]),
  ],
  infrastructureLogging: {
    level: "info",
  },
  resolve: {
    alias,
    extensions: ["*", ".js", ".ts", ".tsx"],
  },
  module: {
    rules: [
      {
        test: /\.(j|t)sx?$/,
        use: [
          { loader: "babel-loader" },
          { loader: "react-hot-loader/webpack" },
        ],
        exclude: /node_modules/,
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loader: "file-loader",
        options: {
          name: "/images/[name].[ext]",
        },
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: "style-loader",
          },
          {
            loader: "css-loader",
            options: {
              modules: {
                localIdentName: "[name]__[local]___[hash:base64:5]",
              },
              sourceMap: true,
              importLoaders: 1,
            },
          },
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                plugins: () => [autoprefixer],
              },
            },
          },
        ],
      },
    ],
  },
  devServer: {
    hot: true,
  },
};

module.exports = baseDevConfig;
