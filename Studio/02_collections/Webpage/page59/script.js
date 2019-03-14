var imageList = [

				"img/WSP_INSTA/154_WSP.png",
				"img/WSP_INSTA/155_WSP.png",
				"img/WSP_INSTA/156_WSP.png",
				"img/WSP_INSTA/157_WSP.png",
				"img/WSP_INSTA/158_WSP.png",
				"img/WSP_INSTA/159_WSP.png",
				"img/WSP_INSTA/160_WSP.png",
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
