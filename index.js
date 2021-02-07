var player1 = Math.floor(Math.random()*6) + 1;
var player2 = Math.floor(Math.random()*6) + 1;

var img1 = "assets/dice"+player1+".png";
var img2 = "assets/dice"+player2+".png";

document.querySelector(".player1-dice").setAttribute("src", img1 ); //never enclose variables in double quotes
document.querySelector(".player2-dice").setAttribute("src", img2 );

if(player1 > player2)
{

  document.querySelector("h1").innerHTML = "Player 1 wins";
}
else
{
  document.querySelector("h1").innerHTML = "Player 2 wins";
}
console.log(player1);
console.log(player2);
