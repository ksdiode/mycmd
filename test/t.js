// let fs = require('fs-extra')

// let src = './temp1'
// let dst = './dst-temp2'

// fs.copySync(src, dst)

let ncp = require('ncp').ncp
let replace = require('stream-replace')

dict = {
  hello : '<hello>',
  world : 'myworld'
}


async function copyfolder(src, dst, rdict={}) {
  ncp(src, dst, {
    transform : (read, write) => {
      read.pipe(replace(/\$\{(.*?)\}/gm, (_,key)=>rdict[key] ? rdict[key] : key))
          .pipe(write)
    }
  }, ()=>console.log('완료'))
  
}


copyfolder('./temp1', './dst-temp2')
