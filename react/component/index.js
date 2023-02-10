const path = require('path');
const cwd = process.cwd();

async function run(name) {
  console.log('create component', name);
  const target = path.join(cwd, 'src', 'components', name);

  console.log(target);
}

module.exports = run;
