var randomNumber1 = (Math.floor(Math.random()*6))+1;
var randomNumber2 = (Math.floor(Math.random()*6))+1;

document.querySelectorAll("img")[0].setAttribute("src", "images/dice" + randomNumber1 + ".png");
document.querySelectorAll("img")[1].setAttribute("src", "images/dice" + randomNumber2 + ".png");

if (randomNumber1 === randomNumber2) {
	document.querySelector("h1").innerHTML="Draw!";
} else if (randomNumber1>randomNumber2) {
	document.querySelector("h1").innerHTML="<img class='flagmoji' src='https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/160/apple/114/triangular-flag-on-post_1f6a9.png'>Player 1 Wins!";
} else	{
	document.querySelector("h1").innerHTML="Player 2 Wins! <img class='flagmoji' src='https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/160/apple/114/triangular-flag-on-post_1f6a9.png'>";
}