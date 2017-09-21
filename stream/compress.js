var fs = require('fs')

var zlib = require('zlib')

fs.createReadStream('stream/input_compress.txt')
	.pipe(zlib.createGzip())
	.pipe(fs.createWriteStream('stream/input_compress.txt.gz'))

console.log('压缩完成')