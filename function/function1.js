function say(someWord) {
	console.log(someWord)
}

function foo(someFn, value){
	someFn(value)
}

foo(say,'im ok')