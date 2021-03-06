const util = require('util');
const fs = require('fs');
const writeFile = util.promisify(fs.writeFile) 

const ChromeExtension = require('crx');
/* eslint import/no-unresolved: 0 */
const name = require('../stable/manifest.json').name;
const argv = require('minimist')(process.argv.slice(2));

const keyPath = argv.key || 'key.pem';
const existsKey = fs.existsSync(keyPath);
const crx = new ChromeExtension({
  appId: argv['app-id'],
  codebase: argv.codebase,
  privateKey: existsKey ? fs.readFileSync(keyPath) : null
});

crx.load('stable')
  .then(() => crx.loadContents())
  .then(async (archiveBuffer) => {
    await writeFile(`${name}.zip`, archiveBuffer);

    if (!argv.codebase || !existsKey) return;
    crx.pack(archiveBuffer).then(async (crxBuffer) => {
      const updateXML = crx.generateUpdateXML();

      await writeFile('update.xml', updateXML);
      await writeFile(`${name}.crx`, crxBuffer);
    });
  });
