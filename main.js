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
 }
 }
 
 function draw() {
     background('#77eb34');
 }