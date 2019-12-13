var numSquares=6;
var colors=generateArray(numSquares);
var squars=document.querySelectorAll(".square");
var selectedColor=colors[randomColor()];
var colorDisbaly=document.getElementById("Disbaly");
var hint =document.getElementById("hint");
var header=document.getElementById("header");
var reset=document.querySelector("button");
var easyMode=document.getElementById("easyMode");
var hardMode=document.getElementById("hardMode");

easyMode.addEventListener("click",function(){
	hint.textContent=null;
	header.style.backgroundColor="steelblue";
	hardMode.classList.remove("selected");
	easyMode.classList.add("selected");
	numSquares=3;
	colors=generateArray(numSquares);
	selectedColor=colors[randomColor()];
	colorDisbaly.textContent=selectedColor;
	for(var i=0;i<6;i++){
		if(i<3){
			squars[i].style.backgroundColor=colors[i];
		}
		else{
			squars[i].style.display="none";
		}
	}

});
hardMode.addEventListener("click",function(){
	hint.textContent=null;
	header.style.backgroundColor="steelblue";
	hardMode.classList.add("selected");
	easyMode.classList.remove("selected");
	numSquares=6;
	colors=generateArray(numSquares);
	selectedColor=colors[randomColor()];
	colorDisbaly.textContent=selectedColor;
	for(var i=0;i<colors.length;i++){
		squars[i].style.backgroundColor=colors[i];
		squars[i].style.display="block";
	}
});
reset.addEventListener("click",function(){
	hint.textContent=null;
	colors=generateArray(numSquares);
	selectedColor=colors[randomColor()];
	header.style.backgroundColor="steelblue";
	for(var i=0;i<squars.length;i++){
		squars[i].style.backgroundColor=colors[i];
	}
	colorDisbaly.textContent=selectedColor;
	reset.textContent="New Color";
});
colorDisbaly.textContent=selectedColor;
for(var i=0;i<squars.length;i++){
	squars[i].style.backgroundColor=colors[i];

	squars[i].addEventListener("click",function(){
		var selected=this.style.backgroundColor;
		if(selected==selectedColor){
			hint.textContent="Correct!";
			editback(selectedColor);
			header.style.backgroundColor=selectedColor;
			reset.textContent="Play Again?"
		}
		else{
			hint.textContent="Wrong!";
			this.style.backgroundColor="#232323";
		}
	});
}
function editback(color){
	for(var i=0;i<squars.length;i++){
		squars[i].style.backgroundColor=color;
	}
}
function randomColor(){
	var random=Math.floor(Math.random() * colors.length);
	return random;
}
function generateColor(){
	var r=Math.floor(Math.random() * 256);
	var g=Math.floor(Math.random() * 256);
	var b=Math.floor(Math.random() * 256);
	return "rgb("+r+", "+g+", "+b+")";
}
function generateArray(num){
	var arr=[];
	for(var i=0;i<num;i++){
		arr.push(generateColor());
	}
	return arr;
}