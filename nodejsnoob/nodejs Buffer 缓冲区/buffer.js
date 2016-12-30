// 创建长度为10字节的Buffer实例
var buf = new Buffer(10);
// 通过给定数组创建Buffer实例
var buf = new Buffer([10,20,30,40,50]);
// 通过字符串来创建 Buffer 实例
var buf = new Buffer("www.baidu.com","utf-8");
console.log(buf);
// 实例
// 写入缓冲区
// buf.write(string[,offset[,length]][,encoding])
// string - 写入缓冲区的字符串。
// offset - 缓冲区开始写入的索引值，默认为 0 。
// length - 写入的字节数，默认为 buffer.length
// encoding - 使用的编码。默认为 'utf8' 。
var buf = new Buffer(256);
var len = buf.write("www.baidu.com");
console.log("写入的字数" + len);


// 从缓冲区读取数据
// buf.toString([encoding[,start[,end]]])

// encoding - 使用的编码。默认为 'utf8' 。
// start - 指定开始读取的索引位置，默认为 0。
// end - 结束位置，默认为缓冲区的末尾。
// 实例

var buf = new Buffer(26);
for(var i = 0 ; i < 26 ; i++){
	buf[i] = i + 97;
}
console.log(buf.toString("ascii"));
console.log(buf.toString("utf-8",0,5));

// 将 buf转化为JSON  buf.toJSON  返回值为json对象
var buf = new Buffer("www.baidu.com");
var json = buf.toJSON(buf);
console.log(json.data);

// 缓冲区合并 Buffer.concat(list[,totaLength]);
// list - 用于合并的 Buffer 对象数组列表。
// totalLength - 指定合并后Buffer对象的总长度。

var buffer1 = new Buffer("百度");
var buffer2 = new Buffer("www.baidu.com");
var buffer3 = Buffer.concat([buffer1,buffer2]);
console.log("buffer3的内容:" + buffer3);

// 缓冲区比较 
// buf.compare(otherBuffer)
// otherBuffer - 与 buf 对象比较的另外一个 Buffer 对象。


var buffer1 = new Buffer("ABC");
var buffer2 = new Buffer("ABC");
var result = buffer1.compare(buffer2);
if (result < 0) {
	console.log(buffer1 + "在" + buffer2 + "之前");
}else if (result == 0) {
	console.log(buffer1 + "与" + buffer2 + "相同");
}else{
	console.log(buffer1 + "在" + buffer2 + "之后");
}


// 拷贝缓冲区
// buf.copy(targetBuffer[, targetStart[, sourceStart[, sourceEnd]]])
// 参数描述如下：
// targetBuffer - 要拷贝的 Buffer 对象。
// targetStart - 数字, 可选, 默认: 0
// sourceStart - 数字, 可选, 默认: 0
// sourceEnd - 数字, 可选, 默认: buffer.length

var buffer1 = new Buffer("ABC");
var buffer2 = new Buffer(3);
buffer1.copy(buffer2);
console.log(buffer2.toString()); // 注意 是buffer2拷贝的buffer1的东西	

// 缓冲区裁剪 
// buf.slice([start[, end]])
// 参数描述如下：
// start - 数字, 可选, 默认: 0
// end - 数字, 可选, 默认: buffer.length

var buffer1 = new Buffer("xiaocheng");
var buffer2 = buffer1.slice(2,3);
console.log("buffer2 content : " + buffer2);

// 缓冲区长度
// buf.length 
var buffer1 = new Buffer("xiaocheng");
var length = buffer1.length;
console.log("buffer1.length : " + length);
