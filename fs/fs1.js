var fs = require('fs')

// fs.readFile('fs/sample.txt',function(err,data){
// 	if(err){
// 		console.log('err')
// 	}else{
// 		console.log(data)
// 	}
// })

fs.readFile('fs/sample.txt','utf-8',(err,data) => {
	if(err){
		console.log('err')
	}else{
		console.log(data)
	}
})