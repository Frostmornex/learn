var btn1 = document.getElementById("btn1");
var btn2 = document.getElementById("btn2");
var main = document.getElementById("main");
var myList = document.getElementById("list");
var ul = document.getElementsByTagName("ul");
var story = myList.getElementsByClassName("item");
var popup = document.getElementsByClassName("popup")[0];
var close = document.querySelector(".close");


console.log(btn1);
console.log(btn2);
console.log(ul);
console.log(story);


function addItem(){
	var newLi = document.createElement("li");
	newLi.innerHTML = "Новая задача!";
	newLi.className = "item";
	myList.appendChild(newLi);
	popup.style.display = "none";
}
function delItem(){
	myList.removeChild(story[0]);

	if(story.length == 0){
		popup.style.display = "block";
	}
}

function closePopup(){
	popup.style.display = "none";
}

btn1.addEventListener("click", addItem);
btn2.addEventListener("click", delItem);
close.addEventListener("click", closePopup);


//alert("Hello world!");
//console.log("Hello world!");

/*var myFirstVar = 50;
myFirstVar = 25;
console.log(myFirstVar);*/

/*console.log(4+6)
console.log(4+ "I am string");
console.log("Hello" + "World!");*/

/*var incr = 10;
	decr = 10;

incr++;
decr--;

console.log(incr);
console.log(decr);*/

/*console.log(10%3);*/

/*var num ="5";
console.log(num == 5);
console.log(num === 5);*/

/*var number = 5;
var string = "Hello World";
var symbol;
true;
false;*/

/*console.log(6/2 == 3);
console.log(10/5 == 3;*/

/*var und;

console.log(und)

var obj = {};*/

/*console.log(typeof obj);
console.log(typeof string);*/

/*if ( 10 + 5 == 15) {
	alert("It's a true!");
}
else if ( 10 + 5 == 15) {
		alert("Wrong!");
}*/

/*for (var i = 1; i < 8; i++) {
	console.log(i);
};*/

