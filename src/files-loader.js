const requireDirAsMap = require('require-dir-as-map');


module.exports = function loader(directory) {
  return requireDirAsMap(
    directory,
    {
      filter: filterFile.bind(null, directory),
      map: mapModuleName
    }
  );
}


function filterFile(directory, file) {
  return isJavascript(file) && isDifferentThanIndexFile(directory, file);
}


function isJavascript(file) {
  return file.endsWith('.js');
}


function isDifferentThanIndexFile(directory, file) {
  return file !== 'index.js'
}


function mapModuleName({ module, file }) {
  const name = module.NAME || getNameBasedOnFile(file);

  return name;
}

