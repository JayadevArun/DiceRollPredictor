var randomNumber1=Math.random();
var randomNumber2=(Math.floor(randomNumber1*6))+1;
if(randomNumber2===1)
{
    document.querySelector("img.img1").setAttribute("src","./dice1.png");
}
if(randomNumber2===2)
{
    document.querySelector("img.img1").setAttribute("src","./dice2.png");
}
if(randomNumber2===3)
{
    document.querySelector("img.img1").setAttribute("src","./dice3.png");
}
if(randomNumber2===4)
{
    document.querySelector("img.img1").setAttribute("src","./dice4.png");
}
if(randomNumber2===5)
{
    document.querySelector("img.img1").setAttribute("src","./dice5.png");
}
if(randomNumber2===6)
{
    document.querySelector("img.img1").setAttribute("src","./dice6.png");
}

var randomNumber3=Math.random();
var randomNumber4=Math.floor(randomNumber3*5)+1;
if(randomNumber4==1)
{
    document.querySelector("img.img2").setAttribute("src","./dice1.png");
}
if(randomNumber4===2)
{
    document.querySelector("img.img2").setAttribute("src","./dice2.png");
}
if(randomNumber4===3)
{
    document.querySelector("img.img2").setAttribute("src","./dice3.png");
}
if(randomNumber4===4)
{
    document.querySelector("img.img2").setAttribute("src","./dice4.png");
}
if(randomNumber4===5)
{
    document.querySelector("img.img2").setAttribute("src","./dice5.png");
}
if(randomNumber4===6)
{
    document.querySelector("img.img2").setAttribute("src","./dice6.png");
}

if(randomNumber2>randomNumber4)
{
    document.querySelector("h1").innerHTML="🏆Player 1 WINS";
}
if(randomNumber2<randomNumber4)
{
    document.querySelector("h1").innerHTML="🏆Player 2 WINS";
}
if(randomNumber2===randomNumber4)
{
    document.querySelector("h1").innerHTML="DRAW";
}