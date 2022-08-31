img="";
status="";
objects=[];
function preload(){
    img=loadImage("dog_cat.jpg");
}

function setup(){
    canvas=createCanvas(640,420);
    canvas.center();
    objectDetector=ml5.objectDetector("cocossd",modelLoaded);
    document.getElementById("status").innerHTML="status:detectando objetos";

}
function modelLoaded(){
    console.log("modelocargado")
    status=true;
    objectDetector.detect(img,gotresult)
}
function draw(){
    image(img,0,0,640,420);
    if(status!=""){
    for(i=0;i<objects.length;i++){
        document.getElementById("status").innerHTML="status objeto dectectado";


















        fill("red");
        percent=floor(objects[
            i
        ].confidense*100);
        text(objects[
            i
        ].label+""+percent+"%",objects[
            i
        ].x,objects[
            i
        ].y);
    
    }
    }
    
}

function gotresult(error,results){
    if (error){
        console.error(error);
    }else{
        console.log(results);
objects=results;
    }
}