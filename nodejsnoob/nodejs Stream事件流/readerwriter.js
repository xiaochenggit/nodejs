// 管道流
var fs = require("fs");
// 创建一个可读流
var readerStream = fs.createReadStream("reader.txt");
// 创建一个可写流
var writerStream = fs.createWriteStream("write.txt");
// 管道读写操作
// 读取 reader.txt 的内容,并将内容写入到 write.txt 文件中;
readerStream.pipe(writerStream);
console.log("程序执行完毕");