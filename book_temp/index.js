let fs = require('fs')
let path = require('path')

let org = 'D:/__강의자료__/서식.pptx'
var Glob = require("glob").Glob
var mg = new Glob('*.pdf', (err, files)=>{
  files.forEach(file=>{
    obj = path.parse(file)
    let new_file = obj.name + '.pptx'
    fs.createReadStream(org).pipe(fs.createWriteStream(new_file)); 
  })
  
})


cur = process.cwd()