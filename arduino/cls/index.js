let fs = require('mfs')
let path = require('path')

exports.run = async function(argv) {
  if(!argv[0]) {
    console.log('클래스 명을 입력하세요')
    console.log( '  arduino cls <classname>')
    return
  }
  
  let classname = argv[0]; 
  let CLS_NAME = classname.toUpperCase();

  let dict = {
    CLS_NAME: CLS_NAME,
    clsName: classname
  };

  let srcDir = path.join(__dirname, '../templates/cls')
  let dstDir = path.join(process.cwd(), classname)

  if(!fs.existsSync(dstDir)) {
    fs.mkdirs(dstDir)
  }

  await fs.copyfolder(
    path.join(srcDir, 'cls.h'),
    path.join(dstDir, classname + '.h'),
    dict
  )
  await fs.copyfolder(
    path.join(srcDir, 'cls.cpp'),
    path.join(dstDir, classname + '.cpp'),
    dict
  )

  console.log(path.join(dstDir, classname + '.h'))
  console.log(path.join(dstDir, classname + '.cpp'))
  console.log(`${classname} 생성 완료`)
}