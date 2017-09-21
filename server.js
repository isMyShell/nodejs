const http = require('http')

var app = http.createServer((req, res) => {
	res.writeHead(200,{'Content-Type':'text/plain'})

	res.end('hello world')
})

app.listen(8888)

console.log('server in localhost:8888')