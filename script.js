//your JS code here. If required.
function displayFunctionName(){
	console.log(arguments.callee.name);
}
displayFunctionName();