var buf = new Buffer(256)

len = buf.write("i am yiqi")

console.log(len,buf)

var buf2 = new Buffer(26)
for(var i=0; i<26; i++){
	buf2[i] = i + 97
}
// buf2.forEach((item,index) => { buffer  不是数组没有数组的方法
// 	item[index] = index + 97
// })

console.log(buf2.toString())

console.log(buf2.toJSON())