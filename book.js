status4="";
img4="";
object4=[];
function preload()
{
   img4= loadImage('gp.jpg');
}

function setup()
{
    canvas=createCanvas(640,420);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd',  modelLoaded)
    document.getElementById("status4").innerHTML = "Status : Detecting Objects ";
}

function modelLoaded()
{
    console.log("Model Loaded! ");
    status4 = true;

}

function draw()
{
image(img4 ,0, 0, 640, 420);
if(status4!="")
{
    document.getElementById("status4").innerHTML = "Status : Object Detected";
    document.getElementById("number_of_objects4").innerHTML = "Number of objects detected are : "+ object4.length;

    for(i=0; i<object4.length; i++)
    {
        fill(r,g,b);
        percent = floor(object4[i].confidence * 100);
        text(object4[i].label + " " + percent + "%",object4[i].x, object4[i].y);
       noFill();
       stroke(r,g,b);
       rect(object4[i].x, object4[i].y, object4[i].width, object4[i].height);
    }
}

}  

function back4()
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
    
    object4 = results;
}