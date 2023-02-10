const run = {
  node: require('./node'),
};

const cmd = process.argv[2];
const argv = process.argv.slice(3);
console.log(argv);
run[cmd](argv);
