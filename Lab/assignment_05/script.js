
var myString = "hello this is a string";
var myNumber = 3;
var myBoolean = true;


console.log(myNumber);

var myDiv = document.getElementById("wrapper")

console.log(myDiv)

var myFunction = function(){

	myNumber= myNumber + 1;
	console.log(myNumber)

}


myDiv.onclick = myFunction;
