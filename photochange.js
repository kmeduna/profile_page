
function changeImage(){
	document.getElementById('pic').src = "Dirtbike2.jpg"
}

var i = 0;
function change(){
	//checking if i divides by 2 without a remainder
	if (i % 5 == 0){
  	document.getElementById('pic').src = "Dogs.jpg";
  } else if (i % 5 == 1) {
  	document.getElementById('pic').src = "Familyphoto.jpg";
  } else if (i % 5 == 2){
  	document.getElementById('pic').src = "Pretty.jpg";
  }else if (i % 5 == 3){
     document.getElementById('pic').src = "Glitch.jpg"
  }else{
    document.getElementById('pic').src = "Dirtbike2.jpg"
  }
  i++; // same as i = i + 1


}
