const requireDirAsMap = require('require-dir-as-map');
const fs = require('fs');

module.exports = requireDirAsMap(`${__dirname}/`, {
  filter: (file) => {  // eslint-disable-line
    return file !== 'index.js' && !fs.lstatSync(`${__dirname}/${file}`).isDirectory();
  },
});
