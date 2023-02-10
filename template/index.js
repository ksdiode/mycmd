const path = require('path');
const efs = require('fs-extra');
const copydir = require('copy-dir');

const cmd = process.argv[2];
const argv = process.argv.slice(3);

const cwd = process.cwd();

async function run(cmd, [from, to]) {
  const src = path.join(__dirname, 'templates', cmd, from);

  let target;
  if (!to) {
    target = path.join(cwd, from);
  } else {
    target = path.join(cwd, to, from);
  }
  console.log(target);
  efs.ensureDirSync(target);

  copydir.sync(src, target, {
    filter: function (stat, filepath, filename) {
      filepath = filepath.replace(src, '');
      console.log('-->', path.join(from, filepath));
      return true;
    },
  });
}

run(cmd, argv);
