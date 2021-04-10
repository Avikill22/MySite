var arr = ["dice1.png","dice2.png","dice3.png","dice4.png","dice5.png","dice6.png"];
var player1 = Math.floor(Math.random()*arr.length);
var player2 = Math.floor(Math.random()*arr.length);


document.querySelector(".img1").setAttribute("src","images/"+arr[player1]);
document.querySelector(".img2").setAttribute("src","images/"+arr[player2]);
if(player1>player2){
    document.querySelector("h1").innerHTML = "🚩Player1 Wins";
}else if(player2>player1){
    document.querySelector("h1").innerHTML = "Player2 Wins🚩";
}else{
    document.querySelector("h1").innerHTML = "Draw";
}