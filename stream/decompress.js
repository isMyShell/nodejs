var fs = require('fs')

var zlib = require('zlib')

fs.createReadStream('stream//input_compress.txt.gz')
	.pipe(zlib.createGunzip())
	.pipe(fs.createWriteStream('stream/output_decompress.txt'))

console.log('解压完毕')
