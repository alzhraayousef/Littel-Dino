
var backGround=document.createElement("section");
backGround.setAttribute("id","backGround");
document.body.appendChild(backGround);
var divs=document.getElementsByTagName("div");

function imageOne(){
var moon1=document.createElement("div");
var img1=document.createElement("img");
img1.setAttribute("class","images-game");
img1.setAttribute("src","images/mouse.jpeg");
backGround.appendChild(moon1);
moon1.style.marginRight='10px';
moon1.appendChild(img1);
}

function imageTwo(){
var moon2=document.createElement("div");
var img2=document.createElement("img");
img2.setAttribute("class","images-game");
img2.setAttribute("src","images/calf.jpg");
backGround.appendChild(moon2);
moon2.appendChild(img2);
}

 function imageThree(){
var moon3=document.createElement("div");
var img3=document.createElement("img");
img3.setAttribute("class","images-game");
img3.setAttribute("src","images/chick.jpg");
backGround.appendChild(moon3);
moon3.appendChild(img3);
}

function imageFour(){
var moon4=document.createElement("div");
var img4=document.createElement("img");
img4.setAttribute("class","images-game");
img4.setAttribute("src","images/chicken.jpg");
backGround.appendChild(moon4);
moon4.appendChild(img4);
}

function imagefive(){
var moon5=document.createElement("div");
var img5=document.createElement("img");
img5.setAttribute("class","images-game");
img5.setAttribute("src","images/sheep.jpeg");
backGround.appendChild(moon5);
moon5.appendChild(img5);
}

function imageSix(){
var moon6=document.createElement("div");
var img6=document.createElement("img");
img6.setAttribute("class","images-game");
img6.setAttribute("src","images/horse.jpg");
backGround.appendChild(moon6);
moon6.appendChild(img6);
}

imageOne();
imageTwo();
imageFour();
imageSix();
imageThree();
imagefive();
// #####
imageThree();
imageSix();
imageTwo();
imagefive();
imageOne();
imageFour();
console.log(backGround)

var images=document.getElementsByClassName("images-game");
function fun1(){
    setTimeout( function(){
        for(var i=0;i<images.length;i++){
          images[i].style.opacity=1;
        }
    },1000);
}
function fun1(){
    setTimeout( function(){
        for(var i=0;i<images.length;i++){
          images[i].style.opacity=0;
        }
    },1200);
}
var flag=true;
var arr1=[];
for(var i=0;i<divs.length;i++){
    divs[i].addEventListener('click',function(){
        if(flag){
     this.firstChild.style.opacity='1';
     if(arr1.length==0){
        arr1[0]=this;
     }else if(arr1.length==1){
        arr1[1]=this;
     }
     if(arr1.length==2){
        flag=false;
       setTimeout(checkTwoImages,500);
     }
        }
    })
    function checkTwoImages(){
        if(arr1[0].firstChild.getAttribute('src')==arr1[1].firstChild.getAttribute('src')){
            document.getElementById("successAudio").play();
           }
        
           else{
               arr1[0].firstChild.style.opacity=0;
               arr1[1].firstChild.style.opacity=0;
              document.getElementById("failAudio").play();
           }
           arr1=[]
           flag=true
    }
}
console.log(divs)  
