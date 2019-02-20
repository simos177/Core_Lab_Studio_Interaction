
var myString = "hello this is a string";
var myNumber = 20;
var myBoolean = true;


var myDiv = document.getElementById("wrapper")



var myFunction = function(){
	

	if (myBoolean == true) {
		myBoolean = false;

		myNumber = myNumber + 10;

	

	}else{
		myBoolean = true;

		myNumber = myNumber - 8;

		
	}

	console.log(myNumber)
	myDiv.style.fontSize = myNumber + "px";

}

var anotherFunction = function(){

	if (mynumber < 40){


		myNumber = myNumber + 2;

	}else if(myNumber == 40){

		myNumber = myNumber + 30;
	}else{

		myNumber = 20;
	}


	myDiv.style.fontSize = myNumber + "px";


}



myDiv.onclick = manotherFunction;
colorDiv.onclick = classFunction;
