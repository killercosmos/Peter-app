noseX = 0;
noseY = 0;
difference = 0;
leftWristX = 0;
rightWristX = 0;

function setup() {
   canvas = createCanvas(550,550);
   canvas.position(560,150)
   video = createCapture(VIDEO);
   video.size(550,550);
   poseNet = ml5.poseNet(video,modelLoaded());
   poseNet.on('pose',gotPoses);
}

function modelLoaded() {
    console.log("poseNet is initialized");
}

function gotPoses(results) {
if(results.length > 0 ) {
    console.log(results);
    noseX = results[0].pose.nose.x;
    noseY = results[0].pose.nose.y; 
    console.log("NoseX =" + noseX + "NoseY =" + noseY );

    leftWristX = results[0].pose.leftWrist.x;
    rightWristX = results[0].pose.rightWrist.x;
    difference = floor(leftWristX-rightWristX);

    console.log("LextWristX =" + leftWristX + "RightWristX" + rightWristX  + "difference =" + difference);

}
}

function draw() {
    background('#77eb34');
    document.getElementById("peter_side").innerHTML = "WIdth and Height of the Square is " + difference + "px";
    textSize(difference);
    fill("#90093");
    stroke("#90093");
    text("Peter",50,200,);
}