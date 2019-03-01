var idName = "myElement";

var myFirstElement = document.getElementById(idName);

//myFirstElement.classList.add("newClass")
//myFirstElement.classList.remove("newClass")
myFirstElement.classList.toggle("newClass")

var mySecondElement = document.getElementById(myList);

var myNewNumber = 5;

    myNewNumber = myNewNumber + 20;

    mySecondElement.style.letterSpacing = myNewNumber + "px";


var red = 255;
var green = 0;
var blue = 0;

    mySecondElement.style.backgroundcolor = "rgb(" + red + "," + green + "," + blue + ")"


/*********************/


  if(true){

      console.log("yes")


  }else{

    console.log("no")
  }


/*******************/

var function = function(){
  console.log("this is a string")
}


/*******************/


var myList = document.getElementById("myList");
var mySecondElement = document.getElementById("mySecondButton");
var addingAListElement = function(){

  console.log("test")

  var mynewElement = document.createElement("li")
  mynewElement.className = "important";

  // x
  myList.appendChild(mynewElement)

  mySecondButton.onclick = function(){addingAListElement}



























