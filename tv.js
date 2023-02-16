status2="";
img2="";
object2=[];
function preload()
{
   img2= loadImage('srk.jpg');
}

function setup()
{
    canvas=createCanvas(640,420);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd',  modelLoaded)
    document.getElementById("status_2").innerHTML = "Status : Detecting Objects ";
}

function modelLoaded()
{
    console.log("Model Loaded! ");
    status2 = true;

}

function draw()
{
image(img2 ,0, 0, 640, 420);
if(status2 != "")
{
    document.getElementById("status_2").innerHTML = "Status : Object Detected";
    document.getElementById("number_of_objects2").innerHTML = "Number of objects detected are : "+ object2.length;

    for(i=0; i<object2.length; i++)
    {
        fill(r,g,b);
        percent = floor(object2[i].confidence * 100);
        text(object2[i].label + " " + percent + "%",object2[i].x, object2[i].y);
       noFill();
       stroke(r,g,b);
       rect(object2[i].x, object2[i].y, object2[i].width, object2[i].height);
    }
}


}  

function back2()
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
    
    object2 = results;
}