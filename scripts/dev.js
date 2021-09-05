const tasks = require("./tasks");
tasks.copyAssets("dev");

process.env.BABEL_ENV = "development";
process.env.NODE_ENV = "development";
process.env.ASSET_PATH = '/';

const WebpackDevServer = require("webpack-dev-server");
const webpack = require("webpack");
const config = require("../webpack/dev.config");
const path = require("path");

const options = config.chromeExtensionBoilerplate || {};
const excludeEntriesToHotReload = options.notHotReload || [];

for (const entryName in config.entry) {
  if (excludeEntriesToHotReload.indexOf(entryName) === -1) {
    config.entry[entryName] = ["webpack/hot/dev-server"].concat(
      config.entry[entryName]
    );
  }
}

config.plugins = [new webpack.HotModuleReplacementPlugin()].concat(
  config.plugins || []
);

delete config.chromeExtensionBoilerplate;

const server = new WebpackDevServer(webpack(config), {
  https: false,
  hot: true,
  injectClient: false,
  writeToDisk: true,
  port: 3000,
  contentBase: path.join(__dirname, "../dev"),
  headers: {
    "Access-Control-Allow-Origin": "*",
  },
  disableHostCheck: true,
});

server.listen(3000);
