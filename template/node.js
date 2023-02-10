const path = require('path');
const fs = require('fs');
const copydir = require('copy-dir');

const cwd = process.cwd();

async function run([from, to]) {
  const src = path.join(__dirname, 'templates', 'node', from);
  to = to || from;

  target = path.join(cwd, to);
  if (!fs.existsSync(target)) {
    fs.mkdirSync(target);
  }

  copydir.sync(src, target, {
    filter: function (stat, filepath, filename) {
      filepath = filepath.replace(src, '');
      console.log('-->', path.join(from, filepath));
      return true;
    },
  });
}

module.exports = run;
