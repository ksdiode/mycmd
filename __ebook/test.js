fs = require('fs')
path = require('path')
var rimraf = require("rimraf");
var pdftoimage = require('pdftoimage');
const imageToPdf = require('images-to-pdf');


let test = "D:\\Ebook\\pdf\\케라스 2.x 프로제트";
let dst = "D:\\Ebook\\jpg";
let workDir = "D:\\Ebook\\temp";

async function jpgToPdf(src,  target) {
    let imageFiles = fs.readdirSync(src)
                        .map(f=>path.join(src,f))
    await imageToPdf(imageFiles, target);
    rimraf(src, (err, d)=>{
        console.log('완료', target)
    })

    // 디렉토리 지우기
}


async function run(src) {
    let bookName = path.basename(src)
    console.log(bookName)
    dstDir = path.join(dst, bookName)
    if(!fs.existsSync(dstDir)) fs.mkdirSync(dstDir);

    fs.readdirSync(src).forEach(async (f, ix)=>{
        let srcFile = path.join(src, f);
        let chapterDir = path.join(workDir, '' + ix)
        if(!fs.existsSync(chapterDir)) fs.mkdirSync(chapterDir);
        // console.log(srcFile , '--->', chapterDir)
        await pdftoimage(srcFile, {format: 'jpeg',prefix: 'img',outdir: chapterDir})
        // jpg --> pdf
        let newTarget = path.join(dstDir, path.parse(srcFile).name  + '.pdf')
        // console.log('완료', newTarget, chapterDir)
        jpgToPdf(chapterDir, newTarget)
    })
}

run(test);
