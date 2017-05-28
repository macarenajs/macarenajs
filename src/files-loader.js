const requireDirAsMap = require('require-dir-as-map');
module.exports = function loader(directory) {
  return requireDirAsMap(addEndSlashIfNeeded(directory), {
    filter: filterFile.bind(null, directory),
  });
};

function filterFile(directory, file) {
  return isDifferentThanIndexFile(directory, file);
}

function isDifferentThanIndexFile(directory, file) {
  return file !== 'index.js';
}

function addEndSlashIfNeeded(directory) {
  if (directory.endsWith('/'))
    return directory;
  }
  return `${directory}/`;
}
