var canvas,backgroundImage;
var gameState = 0;
var playerCount;

var database;

var form,game,player;

var allPlayers;

var car1,car2,car3,car4,cars;

function setup(){
    canvas = createCanvas(displayWidth-20 , displayHeight-30);

    database = firebase.database();

    game = new Game();
    game.getState();
    game.start();
    
}

function draw(){
    background("white");

    if(playerCount === 2){
        game.update(1);
    }
    if(gameState === 1){
        clear();
        game.play();
    }

}

// function readPosition(data){
//     position = data.val();
//     ball.x = position.x;
//     ball.y = position.y;
// }

// function writePosition(x,y){

//     database.ref('ball/position').set({
//         'x':  position.x+x,
//         'y':  position.y+y
//     })

    
// }

// function showError(){
//     console.log("Error in writing to the database");
//   }
