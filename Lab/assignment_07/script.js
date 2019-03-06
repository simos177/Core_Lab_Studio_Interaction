/* march 06 script */


/* click button to add image */

var myButton = document.getElementById("imageButton")
var myImageContainer = document.getElementById("imageContainer")

var addImage = function(){

	var myImage = document.createdElement("img");
	myImage.src = "img/puppy.jpg";
	myImageContainer.appendChild(myImage);
}

myButton.onclick = addImage


/* appending click */
console.log("testing")

var myList = document.getElementById("wrapper");

var myFunction = function(){

	var myNewElement = document.creatELement("li");
	myNewElement.className = "myaddedListElement";
	myNewElement.innerhtml = "this is a new list item";

	myList.appendChild(myNewElement);

}

myList.onclick = myFunction;
