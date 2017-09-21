var eventEmitter = require('events').EventEmitter

var event = new eventEmitter()
var arg2_info = 'i am arg2'
console.log('start')

event.on('data_recevied',() => {
	console.log('接受到数据')
})

setTimeout(() => {
	event.emit('data_recevied')
},2000)


event.on('someEvent',(arg1,arg2) => {
	console.log(arg1, arg2)
})

event.removeListener('someEvent',() => {
	console.log('someEvent remove')
})

event.addListener('someEvent',(arg1,arg2) => {
	console.log(arg1, arg2)
})

event.emit('someEvent','arg1-info\n', arg2_info)
console.log('end')