console.log("Welcome to dice game! Let's roll");

//for player 1
//genrate random number from 1 -6 for player 1

var randomNumberP1 = Math.floor((Math.random()*6)+1);

//generating random image
var randomImageP1 = "images/dice" + randomNumberP1 + ".png";

//using dom selecting img tag at index 0
var selectImageForP1 = document.querySelectorAll("img")[0];

//changing the attribute of image src to the random image generated
var diceOfP1 = selectImageForP1.setAttribute("src" , randomImageP1);



//for player 2
//generate random number from 1 - 6
var randomNumberP2 = Math.floor((Math.random()*6)+1);

//attaching the image to generated random number
var randomImageP2 = "images/dice" + randomNumberP2 + ".png";

//using dom select img at index 1
var selectImageForP2 = document.querySelectorAll("img")[1];

//changing the image attribute src to random number generated
var diceOfP2 = selectImageForP2.setAttribute("src",randomImageP2);


//checking for the winner

if (randomNumberP1 > randomNumberP2) {
    document.querySelector('h1').innerHTML= ("Player 1 wins!");
}
else if (randomNumberP1 < randomNumberP2 ) {
    document.querySelector('h1').innerHTML=("Player 2 wins!");
}
else {
    document.querySelector('h1').innerHTML=("It's draw!");
}