require('shelljs/global');
const archiver = require('archiver');
const fs = require('fs');

const STABLE_BUILD_TAGS = ['stable', 'debug'];

exports.copyAssets = (type) => {
  const env = STABLE_BUILD_TAGS.includes(type) ? 'prod' : type;
  rm('-rf', type);
  mkdir(type);
  cp(`chrome/manifest.${env}.json`, `${type}/manifest.json`);
  cp('-R', 'chrome/assets/*', type);
  exec(`pug -O "{ env: '${env}' }" -o ${type} chrome/views/`);
};

exports.findBuildType = (args) => {
  // eslint-disable-next-line array-callback-return
  const filtered = args.map((arg) => {
    const level = arg.includes('level=') && arg.split('level=');
    if (level) return level[1];
    return false;
  }).filter(r => r);
  return filtered[0];
};

exports.zipDirectory = (type) => {
  const location = `${type}.zip`;
  const archive = archiver('zip', { zlib: { level: 9 } });
  const stream = fs.createWriteStream(location);
  return new Promise((resolve, reject) => {
    archive
      .directory(type, false)
      .on('error', err => reject(err))
      .pipe(stream)
    ;

    stream.on('close', () => resolve(location));
    archive.finalize();
  });
};
