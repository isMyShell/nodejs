var buf1 = new Buffer('asd')

var buf2 = new Buffer(3)

buf1.copy(buf2)

console.log(buf2.toString())