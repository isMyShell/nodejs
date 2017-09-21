var events = require('events')

var eventEmitter = new events.EventEmitter()

var handle = function connection() {
	console.log('连接成功')
	eventEmitter.emit('data_recevied')
}

eventEmitter.on('data_recevied',() => {
	console.log('数据接受完毕')
})

eventEmitter.on('connection',handle)

eventEmitter.emit('connection')

console.log('事件结束')

