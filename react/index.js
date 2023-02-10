const run = {
  component: require('./component'),
};

const cmd = process.argv[2];
const argv = process.argv.slice(3);

run[cmd](...argv);
