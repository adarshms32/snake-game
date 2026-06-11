//alert("hello adarsh")
//1.variable declare
var cvs = document.getElementById("canvas").getContext("2d")
var sposx=80;
var sposy=80;
var nposx=0;
var nposy=0;
var fposx=140;
var fposy=140;
var snaketail=[];
var snakesize=1;
var score=0;
var gamestatus ="Ready";



//2.onload function
window.onload = function()
{

  document.addEventListener("keydown",inputControl);
  game=setInterval(maingame,200);
}



//3.maingame function 
function maingame()
{
  document.getElementById("game-status").innerHTML = gamestatus;
  document.getElementById("score").innerHTML=score;
  //movesnake
  sposx+=nposx;
  sposy+=nposy;



  //controlsnakemnmt
  if(sposx>400)
  {
    sposx=0;
  }
  if(sposy>400)
    {
      sposy=0;
    }
    if(sposx<0)
      {
        sposx=400;
      }
      if(sposy<0)
        {
          sposy=400;
        } 





  //game area
   cvs.fillStyle="black";
   cvs.fillRect(0,0,400,400);

for (var cl=0;cl<400;cl+=20)
{
  cvs.moveTo(cl,0);
  cvs.lineTo(cl,400);
}
for (var rl=0;rl<400;rl+=20)
  {
    cvs.moveTo(0,rl);
    cvs.lineTo(400,rl);
  }
  cvs.strokeStyle = "black";
cvs.stroke();



//snake

cvs.fillStyle="yellow";
//cvs.fillRect(sposx,sposy,20,20);
for(var i=0;i<snaketail.length;i++)
{
  cvs.fillRect(
    snaketail[i].x,snaketail[i].y,20,20
  );
  if(sposx == snaketail[i].x && sposy == snaketail[i].y && snakesize>1)
  {
    clearInterval(game);
  }
}

//fruit

cvs.fillStyle="red";
cvs.fillRect(fposx,fposy,20,20);

 
//if snake eat fruit
if(sposx==fposx && sposy==fposy){
  snakesize++;
  score+=10;
fposx=Math.floor(Math.random()*20)*20;
fposy=Math.floor(Math.random()*20)*20;


}

snaketail.push({x:sposx,y:sposy});
while(snaketail.length>snakesize){
  snaketail.shift();
}

}



//4.input control function
function inputControl(e)
{
  console.log(e.keyCode);
  console.log(e.key);

  switch(e.keyCode){
    case 38:
      nposy-=20;
      nposx=0;
    break;
    case 40:
      nposy+=20;
      nposx=0;
    break;
    case 39:
      nposx+=20
      nposy=0;
    break;
    case 37:
      nposx-=20;
      nposy=0;
    break;

    
  }
  if(e.keycode==37 ||e.keycode==38||e,keycode ==39||e.keycode==40)
    {
      gamestatus = "game started";
      document.getElementById("game-status").innerHTML = gamestatus;
    }
}