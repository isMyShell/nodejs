

function foo(someFn, value){
	someFn(value)
}

foo((value) => {
	console.log(value)
},'im ok ,are you ok ?')