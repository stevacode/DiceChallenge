//declaring variables
var randomNumber1 = Math.floor(Math.random()*6)+1; 
var randomNumber2 = Math.floor(Math.random()*6)+1;
var randomImageSource1 = "images/dice" + randomNumber1 + ".png";
var randomImageSource2 = "images/dice" + randomNumber2 + ".png";



document.querySelectorAll("img")[0].setAttribute("src", randomImageSource1);
document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);

//if player 1 wins
if (randomNumber1 > randomNumber2) { 					
	document.querySelector("h1").innerHTML="<img class='flagmoji' src='https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/160/apple/114/triangular-flag-on-post_1f6a9.png'>Player 1 Wins!";
} 
//if player 2 wins
else if (randomNumber1 < randomNumber2) {				
	document.querySelector("h1").innerHTML="Player 2 Wins! <img class='flagmoji' src='https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/160/apple/114/triangular-flag-on-post_1f6a9.png'>";
}

else	{
	document.querySelector("h1").innerHTML="Draw!";			
}

