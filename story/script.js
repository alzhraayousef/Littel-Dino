
//story########
//part left side
var container=document.createElement("div");
container.setAttribute("id","contain");
document.body.appendChild(container);
var video1=document.createElement("video");
 video1.setAttribute("id","video1");
video1.controls=true;
var source=document.createElement("source");
source.setAttribute("src","The Horse and The Snail.mp4");
source.setAttribute("type","video/mp4");
container.appendChild(video1);
video1.appendChild(source); 
//part right side
var stories=document.createElement("div");
stories.setAttribute("id","stories");
container.appendChild(stories);
//story 1
var story1=document.createElement("div");
story1.setAttribute("class","img-p");
story1.setAttribute("id","img-p1");
var header1=document.createElement("h2");
header1.setAttribute("class","h2-story");
header1.innerHTML="The Horse and The Snail";
var img1=document.createElement("img");
img1.setAttribute("class","images");
img1.setAttribute("src","images/1.jpg");
stories.appendChild(story1);
story1.appendChild(header1);
story1.appendChild(img1);
//console.log(container);
//story 2
var story1=document.createElement("div");
story1.setAttribute("class","img-p");
story1.setAttribute("id","img-p2");
var header1=document.createElement("h2");
header1.setAttribute("class","h2-story");
header1.innerHTML="The Fox and the Grapes";
var img1=document.createElement("img");
img1.setAttribute("class","images");
img1.setAttribute("src","images/2.jpg");
stories.appendChild(story1);
story1.appendChild(header1);
story1.appendChild(img1);
//story 3
var story1=document.createElement("div");
story1.setAttribute("class","img-p");
story1.setAttribute("id","img-p3");
var header1=document.createElement("h2");
header1.setAttribute("class","h2-story");
header1.innerHTML="The Boy Who Cried Wolf";
var img1=document.createElement("img");
img1.setAttribute("class","images");
img1.setAttribute("src","images/3.jpg");
stories.appendChild(story1);
story1.appendChild(header1);
story1.appendChild(img1);
console.log(container);
 
console.log(container);
document.getElementById("img-p1").addEventListener('click',function(){
    document.getElementById("video1").src="The Horse and The Snail.mp4"
  })
document.getElementById("img-p2").addEventListener('click',function(){
  document.getElementById("video1").src="The Fox and the Grapes.mp4"
})
document.getElementById("img-p3").addEventListener('click',function(){
    document.getElementById("video1").src="The Boy Who Cried Wolf.mp4"
  })