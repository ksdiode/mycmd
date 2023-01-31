fs = require('fs');
path = require('path');
const imageToPdf = require('images-to-pdf');

// let pdfBase = 'D:\\Ebook\\pdf'
let pdfBase = process.cwd();

async function tifToPdf(src, target) {
  let imageFiles = fs.readdirSync(src).map((f) => path.join(src, f));
  console.log(target);
  return await imageToPdf(imageFiles, target);
}

async function srcToPdf(src) {
  // 디렉토리 이름에서 책 이름 추출
  let bookName = path.parse(src).base;
  let targetDir = path.join(pdfBase, bookName);

  const dirs = fs.readdirSync(src);
  if (!fs.existsSync(targetDir)) {
    fs.mkdirSync(targetDir);
  }

  let promises = [];
  dirs.forEach((f) => {
    let dir = path.join(src, f);
    let target = path.join(targetDir, f + '.pdf');
    promises.push(tifToPdf(dir, target));
  });
  return Promise.all(promises);
}

// run(testDir);

exports.srcToPdf = srcToPdf;
