var imageList = [

				"img/WSP_INSTA/161_WSP.png"
				];

var counter = 0;
var resetCounter = imageList.length;



function imageChange() {

	var url = imageList[counter];

	document.getElementById("image").src = url;

	counter++;

	console.log(url);

	if(counter == resetCounter){
	  
	  counter = 0;
	}

}
