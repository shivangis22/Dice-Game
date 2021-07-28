var randomNumber1 = Math.round(6 * (Math.random())) + 1;
var randomNumber2 = Math.round(6 * (Math.random())) + 1;



var randomImage1 = "./images/dice" + randomNumber1 + ".png";
var randomImage2 = "./images/dice" + randomNumber2 + ".png";

// var xxx= "images\dice6.png";
//
// alert(randomImage1);
// alert(randomImage2);



var a = document.querySelectorAll("img")[0];
a.setAttribute("src", randomImage1);

// document.getElementsByClassName("img2").setAttribute("src",randomImage2);

var b = document.querySelectorAll("img")[1];
b.setAttribute("src", randomImage2);

if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").textContent = "Player1 wins";
} else if (randomNumber1 < randomNumber2) {
    document.querySelector("h1").textContent = "Player2 wins";

} else {
    document.querySelector("h1").textContent = "Draw";
}