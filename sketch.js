var points = [];
var database;
var position;

function setup()
{
    database = firebase.database();

    var canvas = createCanvas(700,500);

    var pointsPosition = database.ref('mouse/points');
    pointsPosition.on("value",readPosition,showError);
}
function draw()
{

}

function mouseDragged(){
        points.push(circle(mouseX,mouseY,5,5));
}

function keyPressed(){
    if(keyCode === 32){
        points = [];
    }
}

function readPosition(data){
    position = data.val();
    points.x = position.x;
    points.y = position.y;
}

function showError(){
    console.log("error to writing in a database");
}
