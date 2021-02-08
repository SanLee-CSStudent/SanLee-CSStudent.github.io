function moveToHome(){
	location.href = "index.html";
}

function moveToGallery(){
	location.href = "Gallery.html";
}

function moveToProject(){
	location.href = "Project.html";
}

let canvas, context;

var wrapper;
var animateTime;
var size = 4;
var imgs = [];
var poss = [];
var windowWidth = window.innerWidth;

function init(){
	var img1 = document.getElementById('Senya');
	var img2 = document.getElementById('Nasang');
	var img3 = document.getElementById('Jaesang');
	var img4 = document.getElementById('Lucid');
	var img5 = document.getElementById('Haeta');
	imgs.push(img1);
	imgs.push(img2);
	imgs.push(img3);
	imgs.push(img4);
	// imgs.push(img5);
	
	for(var i=0; i < size; i++){
		var locLeft = i * imgs[i].style.width;
		imgs[i].style.position = "relative";
		imgs[i].style.left = locLeft + "px";
		imgs[i].style.top = "0px";
		
		poss.push(locLeft);
	}
	// img1.style.position = "relative";
	// img1.style.left = "0px";
	// img1.style.top = "0px";

	galleryAnimation();
}

function galleryAnimation(){
	/*for(var i=0; i<size; i++){
		poss[i]++;
		imgs[i].style.left = poss[i] + "px";
		
	}*/
	
	animateTime = setTimeout(function(){galleryAnimation();}, 40);
	
}

window.onload = function(){init();};

function defaultVolume(){
	var ctrl = document.getElementsByClassName("audioControl");
	for(var i=0; i<ctrl.length|0; i++){
		ctrl[i].volume = 0.5;
	}
}