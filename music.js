status3="";
img3="";
object3=[];
function preload()
{
   img3= loadImage('amg.jpg');
}

function setup()
{
    canvas=createCanvas(640,420);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd',  modelLoaded)
    document.getElementById("status3").innerHTML = "Status : Detecting Objects ";
}

function modelLoaded()
{
    console.log("Model Loaded! ");
    status3 = true;

}

function draw()
{
image(img3 ,0, 0, 640, 420);

if(status3!="")
{
    document.getElementById("status3").innerHTML = "Status : Object Detected";
    document.getElementById("number_of_objects3").innerHTML = "Number of objects detected are : "+ object3.length;

    for(i=0; i<object3.length; i++)
    {
        fill(r,g,b);
        percent = floor(object3[i].confidence * 100);
        text(object3[i].label + " " + percent + "%",object3[i].x, object3[i].y);
       noFill();
       stroke(r,g,b);
       rect(object3[i].x, object3[i].y, object3[i].width, object3[i].height);
    }
}
}  

function back3()
{
    window.location="index.html";
}

function gotResult(error, results)
{
    if(error)
    {
        console.log(error);
    }
    console.log(results);
    
    object3 = results;
}