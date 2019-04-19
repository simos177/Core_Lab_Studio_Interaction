
var myArray = ["red", "yellow", "green", "blue", "black", "white","orange", "purple", "pink"];
var myOtherArray = ["car", "cat", "dog", "bird", "bike"];


// myArray.push("strawberries"); //adding new values to our array
// console.log(myArray[0]); //getting the first value of our array 

var myContainer1 = document.getElementById("container1");
var myContainer2 = document.getElementById("container2");
var theBody = document.body;
var counter = 0;

// while loop

document.getElementById("container1").innerHTML = myArray[counter];

var myFunction = function(){

console.log(counter)

while(counter < myArray.length){
	// do something with our array

	counter ++; //is the same as counter = counter + 1;

document.getElementById("container1").innerHTML = myArray[counter];
}

}

document.getElementById("container2").innerHTML = myOtherArray[counter];

var myFunction2 = function(){

console.log(counter)

while(counter < myOtherArray.length){
	// do something with our array

	counter ++; //is the same as counter = counter + 1;

document.getElementById("container2").innerHTML = myOtherArray[counter];
}

}







// theBody.onclick = myFunction;
