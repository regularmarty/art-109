
let canvas;

function setup(){
    canvas = createCanvas(windowWidth, windowHeight);
    canvas.position(0,0);
    canvas.style("z-index", -2);
    // background(225);
}

function windowResized(){
resizeCanvas(windowWidth, windowHeight);
}


function draw(){
    // background(125);
    // strokeWeight(0);
    // fill(random(200,255),random(200,255),random(200,255));
    // ellipse(mouseX, mouseY, 30, 30);

}

function mouseMoved(){
   drawThing(mouseX,mouseY);
   drawThing(mouseX - 50, mouseY + 75);
}

function drawThing(_x,_y){
    strokeWeight(0);
    fill(random(200,255),random(200,255),random(200,255));
    ellipse(_x, _, 30, 30);
}