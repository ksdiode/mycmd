let [cmd, ...argv] = process.argv.slice(2)

console.log(cmd, argv)

let cmds = {
  init : require('./init'),
  cls : require('./cls')
}

cmds[cmd].run(argv)



