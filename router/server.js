var http = require('http')
var {url} = require('path')

function start(route) {
	http.createServer((req, res) => {
		var pathName = url.parse(req.url)
		console.log('request pathName ' + pathName )
		route(pathName)
		res.writeHead(200,{'Content-Type':'text/plain'})
		res.end('hello world')
	}).listen(8888)

	console.log('server start')
}

exports.start = start
