

var imageList = ["assets/img/1.jpg", "assets/img/og.jpg", "assets/img/2.jpg", "assets/img/4.jpg"];
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




// function toggle_div_fun(id) {

//        var divelement = document.getElementById(id);

//        if(divelement.style.display == 'none')
//           divelement.style.display = 'block';
//        else
//           divelement.style.display = 'none';
//     }

// function toggle_div_fun2(id) {

//        var divelement = document.getElementById(id);

//        if(divelement.style.display == 'none')
//           divelement.style.display = 'block';
//        else
//           divelement.style.display = 'none';
//     }

// function toggle_div_fun3(id) {

//        var divelement = document.getElementById(id);

//        if(divelement.style.display == 'none')
//           divelement.style.display = 'block';
//        else
//           divelement.style.display = 'none';
//     }