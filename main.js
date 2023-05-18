death_note="";
down="";

death_note = loadSound("death_note.mp3");
down = loadSound("down.mp3");


function setup(){
    canvas= createCanvas( 600 , 500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();

}
function draw(){
    image(video , 0 , 0 , 600 , 500);
}