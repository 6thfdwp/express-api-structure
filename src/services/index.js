const fs = require('fs');
const path = require('path');

const _exports = {};
fs.readdirSync(__dirname)
  .filter(f => f.indexOf('.') !== 0 && f.slice(-3) === '.js')
  .forEach(f => {
    const k = f.split('.')[0];
    _exports[k] = require(path.join(__dirname, f));
  });

module.exports = _exports;
