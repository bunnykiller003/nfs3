var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var form, player, game;

var cars, car1, car2, car3, car4;
var car1pic,car2pic,car3pic,car4pic;
var track;
 
function preload(){
car1pic=loadImage("images/car1.png");
car2pic=loadImage("images/car2.png");
car3pic=loadImage("images/car3.png");
car4pic=loadImage("images/car4.png");
track=loadImage("images/track.jpg");


}


function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight-30);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
   
}


function draw(){
  if(playerCount === 4){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
  if(gameState==2){
  game.end();
  }
}
