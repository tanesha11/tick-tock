var hr;
var mn;
var sc;
var scAngle;
var mnAngle;
var hrAngle;



function setup() {
    createCanvas(400, 400);


    angleMode(DEGREES);
}

function draw() {
    background(0);

    translate(200,200);
    rotate(-90);

    hr = hour();
    mn = minute();
    sc = second();



    scAngle = map(sc, 0, 60, 0, 360);
    mnAngle = map(mn, 0, 60, 0, 360);
    hrAngle = map(hr %12, 0,12, 0, 360);

    console.log("hour: ", hrAngle);
    console.log("min: ", mn);
    console.log("sec: ", sc);

    x = 0;
    y = 0;

    //drawing seconds hand
    push();
    rotate(scAngle);
    stroke(255, 0, 0);
    strokeWeight(7);
    line(x, y, 100, 0);
    pop();

    //drawing minutes hand
    push()
    rotate(mnAngle);
    // translate(200,300);
    stroke(0, 255, 0);
    strokeWeight(7);
    line(x,y,75,0)
    pop();

    //drawing hours hand
    push()
    rotate(hrAngle);
    // translate(200,300);
    stroke(0, 0, 255);
    strokeWeight(7);
    line(x,y,50,0);
    pop()

    stroke(255,0,0);
    noFill();
    strokeWeight(4.5);
    arc(0,0,300,300,0,scAngle);


    stroke(0,255,0);
    arc(0,0,280,280,0,mnAngle);


    stroke(0,0,255);
    arc(0,0,260,260,0,hrAngle);

    drawSprites();
}