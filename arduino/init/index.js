let fs = require('mfs')
let path = require('path')

let src = path.join(__dirname, '../templates/init')

exports.run = async function(argv) {
  if(!argv[0]) {
    console.log('대상 프로젝트 명을 입력하세요')
    console.log( '  arduino init <project name>')
    return
  }

  let dst = path.join(process.cwd(), argv[0])
  console.log('> 프로젝트명: ', argv[0])
  console.log('> 위치: ', dst)  
  await fs.copyfolder(src, dst) 
  // fs.renameSync(    
  //   path.join(dst, 'arduino.code-workspace'),
  //   path.join(dst, `${argv[0]}.code-workspace`) 
  // )
  console.log('> 완료')
}