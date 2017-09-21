const fs = require('fs')

let rs = fs.createReadStream('stream/sample.txt','utf-8')

rs.on('data',(chunk) => {
	console.log('start data')
	console.log(chunk)
})

rs.on('end',() => {
	console.log('end')
})

rs.on('err',(err) => {
	console.log(err)
})