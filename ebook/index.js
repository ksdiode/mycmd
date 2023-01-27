const fs = require('fs');
const path = require('path');

let pdfBase = 'D:\\Ebook\\pdf';
let bookName = path.basename(process.cwd());

// let pdfPath = path.join(pdfBase, bookName);

tifpdf = require('./srcToPdf');
jpgpdf = require('./pdftojpg');
async function run() {
  console.log('jpg --> pdf');
  await tifpdf.srcToPdf(process.cwd());

  //   console.log('pdf --> jpgpdf', pdfPath);
  //   await jpgpdf(pdfPath);

  console.log('완료');
}

// run()

function makeChapter() {
  let fpath = path.join(process.cwd(), '목차.txt');
  let data = fs.readFileSync(fpath, 'utf-8').split('\r\n');
  data.forEach((f) => {
    console.log(f);
    fs.mkdirSync(f);
  });
}

let [cmd, ...argv] = process.argv.slice(2);

if (cmd == 'chapter') {
  makeChapter();
} else if (cmd == 'make') {
  run();
}
