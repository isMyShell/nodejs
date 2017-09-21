
if (typeof(window) === 'undefined') {
    console.log('node.js');
} else {
    console.log('browser');
}

process.nextTick(function(){
	console.log('nextTick callback')
})

console.log('set nextTick')