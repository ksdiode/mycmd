let fs = require('mfs')
let path = require('path')

let src = path.join(__dirname, '../templates/init')

exports.run = async function(argv) {
  if(!argv[0]) {
    console.log('대상 프로젝트 명을 입력하세요')
    console.log( '  vue init <project name>')
    return
  }

  let dst = path.join(process.cwd(), argv[0])
  console.log('> 프로젝트명: ', argv[0])
  console.log('> 위치: ', dst)  
  await fs.copyfolder(src, dst) 
  console.log('> 완료')
}