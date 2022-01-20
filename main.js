function preload(){

}

function setup(){
    canvas = createCanvas (500, 500);
    video = createCapture(VIDEO)
    video.hide();
    canvas.center();
}

function draw(){
    image(video, 0, 0, 400, 400);
    circle(450, 50, 30);
    circle(450, 100, 30);
    circle(0, 50, 30);
    circle(0, 100, 30);
}
function take_snapshot(){
    save('image.png');
}