 var colorsContent=document.createElement("div");
colorsContent.setAttribute("id","colorsContent");
var redDiv=document.createElement("div");
redDiv.setAttribute("id","redDiv");
colorsContent.appendChild(redDiv);

redDiv.addEventListener('mouseover',function(){
    document.getElementById("color").innerHTML="RED";
    document.getElementById("color").style.color="rgba(255, 0, 0, 0.707)";
})   
redDiv.addEventListener('click',function(){
    document.getElementById("audio1").play();
})  
redDiv.addEventListener('mouseleave',function(){
    document.getElementById("audio1").pause();
})    
var pinkDiv=document.createElement("div");
pinkDiv.setAttribute("id","pinkDiv");
colorsContent.appendChild(pinkDiv);

pinkDiv.addEventListener('mouseover',function(){
    document.getElementById("color").innerHTML="PINK";
    document.getElementById("color").style.color="rgba(240, 128, 128, 0.811)"
})

var blueDiv=document.createElement("div");
blueDiv.setAttribute("id","blueDiv");
colorsContent.appendChild(blueDiv);

blueDiv.addEventListener('mouseover',function(){
    document.getElementById("color").innerHTML="BLUE";
    document.getElementById("color").style.color="rgba(0, 0, 255, 0.766)"
})
blueDiv.addEventListener('click',function(){
    document.getElementById("audio2").play();
})
blueDiv.addEventListener('mouseleave',function(){
    document.getElementById("audio2").pause();
})

var greenDiv=document.createElement("div");
greenDiv.setAttribute("id","greenDiv");
colorsContent.appendChild(greenDiv);

greenDiv.addEventListener('mouseover',function(){
    document.getElementById("color").innerHTML="GREEN";
    document.getElementById("color").style.color="rgba(0, 128, 0, 0.756)"
})

var yellowDiv=document.createElement("div");
yellowDiv.setAttribute("id","yellowDiv");
colorsContent.appendChild(yellowDiv);

yellowDiv.addEventListener('mouseover',function(){
    document.getElementById("color").innerHTML="YELLOW";
    document.getElementById("color").style.color="rgba(255, 255, 0, 0.763)"
})

var purpleDiv=document.createElement("div");
purpleDiv.setAttribute("id","purpleDiv");
colorsContent.appendChild(purpleDiv);

purpleDiv.addEventListener('mouseover',function(){
    document.getElementById("color").innerHTML="ORANGE";
    document.getElementById("color").style.color="rgba(255, 68, 0, 0.586)"
})

var blackDiv=document.createElement("div");
blackDiv.setAttribute("id","blackDiv");
colorsContent.appendChild(blackDiv);

blackDiv.addEventListener('mouseover',function(){
    document.getElementById("color").innerHTML="BLACK";
    document.getElementById("color").style.color="rgba(0, 0, 0, 0.738)"
})

var whiteDiv=document.createElement("div");
whiteDiv.setAttribute("id","whiteDiv");
colorsContent.appendChild(whiteDiv);

whiteDiv.addEventListener('mouseover',function(){
    document.getElementById("color").innerHTML="WHITE";
    document.getElementById("color").style.color="rgba(0, 0, 0, 0.738)"
})

var brownDiv=document.createElement("div");
brownDiv.setAttribute("id","brownDiv");
colorsContent.appendChild(brownDiv);

brownDiv.addEventListener('mouseover',function(){
    document.getElementById("color").innerHTML="BROWN";
    document.getElementById("color").style.color="rgba(165, 42, 42, 0.752)"
})

document.body.appendChild(colorsContent);
console.log(colorsContent)

