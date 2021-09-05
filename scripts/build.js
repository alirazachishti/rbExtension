const tasks = require("./tasks");
const argv = process.argv;
const releaseLevel = tasks.findBuildType(argv) || 'debug';

tasks.copyAssets(releaseLevel);

// Do this as the first thing so that any code reading it knows the right env.
process.env.BABEL_ENV = "production";
process.env.NODE_ENV = "production";
process.env.ASSET_PATH = '/';

const webpack = require("webpack");
const config_file = ['stable','debug'].includes(releaseLevel) ? 'prod' : 'dev';
const config = require(`../webpack/${config_file}.config`);

webpack(config, (err) => {
  if (err) throw err;
  tasks.zipDirectory(releaseLevel).then((output) => {
    console.log(`[(${releaseLevel}) Bundling Completed] --- Output: ${output}`);
  }).catch(error => console.log(`[(${releaseLevel}) Bundling Error]`, error));
});