 
var fs = require('fs');
var replace = require('stream-replace');
 
fs.createReadStream('hello.txt')
  .pipe(replace(/hello/g, '안녕'))
  .pipe(process.stdout);