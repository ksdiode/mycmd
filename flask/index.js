let [cmd, ...argv] = process.argv.slice(2)

let cmds = {
  init : require('./init'),
  blueprint : require('./blueprint')
}


cmds[cmd].run(argv)



