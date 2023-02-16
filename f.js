status5="";
img5="";
object5=[];
function preload()
{
   img5= loadImage('fr.jpg');
}

function setup()
{
    canvas=createCanvas(640,420);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd',  modelLoaded)
    document.getElementById("status5").innerHTML = "Status : Detecting Objects ";
}

function modelLoaded()
{
    console.log("Model Loaded! ");
    status5 = true;

}

function draw()
{
image(img5 ,0, 0, 640, 420);

if(status5!="")
{
    document.getElementById("status5").innerHTML = "Status : Object Detected";
    document.getElementById("number_of_objects5").innerHTML = "Number of objects detected are : "+ object5.length;

    for(i=0; i<object5.length; i++)
    {
        fill(r,g,b);
        percent = floor(object5[i].confidence * 100);
        text(object5[i].label + " " + percent + "%",object5[i].x, object5[i].y);
       noFill();
       stroke(r,g,b);
       rect(object5[i].x, object5[i].y, object5[i].width, object5[i].height);
    }
}
}  

function back5()
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
    
    object5 = results;
}