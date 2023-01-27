let fs = require('mfs')
let path = require('path')

exports.run = async function(argv) {
  if(!argv[0]) {
    console.log('앱이름을 입력하세요')
    console.log( '  flask blueprint <APP 이름>')
    return
  }

  let src = path.join(__dirname, '../templates/init/blueprint/module')
  let dst = path.join(process.cwd(), argv[0])

  let context = {
    module : argv[0]
  }
  console.log('> App 명: ', argv[0])
  console.log('> 위치: ', dst)  
  fs.copyfolder(src, dst, context) 
    .then(()=>{
    fs.rename(
      path.join(dst, 'templates/index.html'),
      path.join(dst, 'templates', argv[0] + '.html')
    ) 
    console.log('> 완료')
  }, 1000)    
}