var fs = require("fs");
var zlib = require("zlib");
// 解压 decompress.zip 文件为 decompress.txt
fs.createReadStream("input.txt.gz")
.pipe(zlib.createGunzip())
.pipe(fs.createWriteStream("解压后的.txt"));
console.log("程序执行完毕");