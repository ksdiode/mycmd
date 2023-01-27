let fs = require('mfs')
let path = require('path')



exports.run = async function(argv) {
  if(!argv[0]) {
    console.log('대상 프로젝트 명을 입력하세요')
    console.log( '  flask init <project name>')
    return
  }

  let mode = argv[1] || 'default';
  let src = path.join(__dirname, '../templates/init', mode)
  let dst = path.join(process.cwd(), argv[0])

  let context = {}
  if (mode =='blueprint') {
    context['module'] = argv[2]  || '__모듈명__'
  }
  console.log('> 프로젝트명: ', argv[0], context)
  console.log('> 위치: ', dst)  
  await fs.copyfolder(src, dst) 
  console.log('> 완료')
}