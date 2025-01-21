var random_n1=Math.floor(Math.random()*6)+1;

var randomImage="dice" + random_n1 + ".png"; //dice1.png - dice6.png
var randomImageSource1="images/"+randomImage; //images/dice1.png - images/dice6.png

var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomImageSource1);

var random_n2=Math.floor(Math.random()*6)+1;
var randomImageSource2="images/dice"+random_n2+ ".png"; //images/dice1.png - images/dice6.png
document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);

if(random_n1>random_n2)
{
    document.querySelector("h1").innerHTML="🚩Player 1 Wins!";
}
else if(random_n2>random_n1)
{
    document.querySelector("h1").innerHTML="🚩Player 2 Wins!";
}
else{
    document.querySelector("h1").innerHTML="Draw!";
}
