var imageList = [

				"img/WSP_INSTA/127_WSP.png",
				"img/WSP_INSTA/128_WSP.png",
				"img/WSP_INSTA/129_WSP.png",
				"img/WSP_INSTA/130_WSP.png",
				"img/WSP_INSTA/131_WSP.png",
				"img/WSP_INSTA/131_WSP.png",
				"img/WSP_INSTA/132_WSP.png",
				"img/WSP_INSTA/133_WSP.png",
				"img/WSP_INSTA/134_WSP.png",
				"img/WSP_INSTA/135_WSP.png",
				"img/WSP_INSTA/136_WSP.png",
				"img/WSP_INSTA/137_WSP.png",
				"img/WSP_INSTA/138_WSP.png",
				"img/WSP_INSTA/139_WSP.png",
				"img/WSP_INSTA/140_WSP.png",
				"img/WSP_INSTA/141_WSP.png",
				"img/WSP_INSTA/142_WSP.png",
				"img/WSP_INSTA/143_WSP.png",
				"img/WSP_INSTA/144_WSP.png",
				"img/WSP_INSTA/145_WSP.png",
				"img/WSP_INSTA/146_WSP.png",
				"img/WSP_INSTA/147_WSP.png",
				"img/WSP_INSTA/148_WSP.png",
				"img/WSP_INSTA/149_WSP.png",
				"img/WSP_INSTA/150_WSP.png",
				"img/WSP_INSTA/151_WSP.png",
				"img/WSP_INSTA/152_WSP.png",
				"img/WSP_INSTA/153_WSP.png",
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
