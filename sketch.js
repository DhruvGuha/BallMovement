var movingBall,database;
var position;

function setup(){
    database = firebase.database();
    createCanvas(500,500);
    movingBall = createSprite(250,250,10,10);
    movingBall.shapeColor = "red";

    var movingBallPosition = database.ref('ball/position');
    movingBallPosition.on("value",readPosition);
}

function draw(){
    background("white");
    if(position !== undefined){
        
    if(keyDown(LEFT_ARROW)){
        writePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        writePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        writePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        writePosition(0,+1);
    }
    drawSprites();
}
}

function readPosition(x,y){
    position = data.val();
    movingBall.x = position.x;
    movingBall.y = position.y;
}

function writePosition(x,y){
    database.ref('ball/position').set({
        'x' : position.x + x,
        'y' : position.y + y
    });

}
