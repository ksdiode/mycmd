fs = require('fs')
path = require('path')
var rimraf = require("rimraf");
var pdftoimage = require('pdftoimage');
const imageToPdf = require('images-to-pdf');


let test = "D:\\Ebook\\pdf\\케라스 2.x 프로제트";
let dst = "D:\\Ebook\\jpg";
let workDir = "D:\\Ebook\\temp";

async function jpgToPdf(srcFile, chapterDir,  target) {
    
    return new Promise(async (resolve, reject)=>{
        try{
            await pdftoimage(srcFile, {format: 'jpeg',prefix: 'img',outdir: chapterDir});
            console.log(target)
            let imageFiles = fs.readdirSync(chapterDir)
                                .map(f=>path.join(chapterDir,f))
            await imageToPdf(imageFiles, target);
            rimraf.sync(chapterDir)
            resolve()
        } catch(e) {
            console.log(e)
            reject()
        }
        
    });
}


async function run(src) {
    let bookName = path.basename(src)
    console.log(bookName)
    dstDir = path.join(dst, '_'+ bookName)
    if(!fs.existsSync(dstDir)) fs.mkdirSync(dstDir);

    let promises = []
    fs.readdirSync(src).forEach(async (f, ix)=>{
        let srcFile = path.join(src, f);
        let chapterDir = path.join(workDir, '' + ix)
        if(!fs.existsSync(chapterDir)) fs.mkdirSync(chapterDir);
        let newTarget = path.join(dstDir, path.parse(srcFile).name  + '.pdf')
        promises.push(jpgToPdf(srcFile, chapterDir, newTarget))
    })
    return Promise.all(promises)
}

module.exports = run