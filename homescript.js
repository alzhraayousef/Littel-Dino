var divPointer=0
var time=0
var mainDiv=document.createElement("div")
document.getElementById("body").appendChild(mainDiv)

function contentDivElements(div,h1,p){
   
    var heading=document.createElement("h1")
    heading.textContent=h1
    heading.setAttribute("id","contentDiv-h1")
    div.appendChild(heading)
    var para=document.createElement("p")
    para.setAttribute("id","contentDiv-p")
    para.textContent=p
    div.appendChild(para)    
}
function createMainDiv(backgroundColor,h1,para,imgsrc){
    mainDiv.innerHTML=" "
    mainDiv.setAttribute("id", "mainDiv")
    mainDiv.style.backgroundColor=backgroundColor;
    var backButton=document.createElement("button")
    backButton.setAttribute("id","backButton")
    var backicon=document.createElement("i")
    backicon.setAttribute("id","backIcon")
    backicon.setAttribute("class","fas fa-angle-left")
    backButton.appendChild(backicon)
    backButton.addEventListener("click",function(){
       /* if(divPointer!=0){
            divPointer=2
            console.log(" if 0",divPointer)
        }
        else{
            divPointer=divPointer-1
            console.log("else",divPointer)

        }
        */
        var check=divPointer-1

      console.log("check: "+check)
       if(check==0){
         divPointer=2
         changeDiv()
       }
       else{
         divPointer-=1
         changeDiv()
       }
       
    });
    mainDiv.appendChild(backButton)

    
    

    var contentDiv=document.createElement("div")
    contentDiv.setAttribute("id","contentDiv")

    contentDivElements(contentDiv,h1,para)
    mainDiv.appendChild(contentDiv)
    var imgContainerDiv=document.createElement("div")
    imgContainerDiv.setAttribute("id","imgContainerDiv")
    mainDiv.appendChild(imgContainerDiv)

    var img=document.createElement("img")
    img.setAttribute("id","mainDiv-img")
    img.src=imgsrc
    imgContainerDiv.appendChild(img)   

    var nextButton=document.createElement("button")
    nextButton.setAttribute("id","nextButton")
    nextButton.addEventListener("click",function(){
        if(divPointer==2){
            divPointer=0
        }
        else{
            divPointer+=1
            console.log("in next button "+divPointer)

        }
        console.log("in next button "+divPointer)
        changeDiv()
    });
    mainDiv.appendChild(nextButton)
    
    nexticon=document.createElement("i")
    nexticon.setAttribute("id","nextIcon")
    nexticon.setAttribute("class","fas fa-angle-right")
    
    nextButton.appendChild(nexticon)
    

}

function changeDiv(){

    var currentDiv=document.getElementById("mainDiv")
    console.log("in chang div",divPointer)
    if(divPointer==0){
        console.log(" in slide 0",divPointer)
      
        divPointer=divPointer+1;        

        createMainDiv("#faf5e1","Learning","Learn and discover more","homeImages/baby-2.png")
    }
    else if(divPointer==1){
        console.log(" in slide 1",divPointer)
        
       
        divPointer=divPointer+1
        createMainDiv("#e1fae6","Story","Listen to interesting stories","homeImages/banner-2.png") 
        
    }
    else if(divPointer==2){
        console.log(" in slide 2",divPointer)
        
        divPointer=0
        createMainDiv("#d1f7f9","Fun & Playing","Fun and play with different Games","homeImages/banner-5.png")
    }




}

changeDiv()


// hager code


//part1
var content=document.createElement("div");
var text=document.createElement("div");
var head2=document.createElement("h2");
var parag1=document.createElement("p");
var link1=document.createElement("a");
var div_Images=document.createElement("div");
var img1=document.createElement("img");
// stars
//star1
var star1=document.createElement("img");
star1.setAttribute("src","homeImages/star1.png");
star1.setAttribute("class","star");
content.appendChild(star1);
star1.style.marginLeft='100px'
star1.style.marginTop='200px'
//star2
var star1=document.createElement("img");
star1.setAttribute("src","homeImages/star1.png");
star1.setAttribute("class","star");
content.appendChild(star1);
star1.style.marginLeft='700px'
star1.style.marginTop='5px'
//star3
var star1=document.createElement("img");
star1.setAttribute("src","homeImages/star1.png");
star1.setAttribute("class","star");
content.appendChild(star1);
star1.style.marginRight='0px';
star1.style.marginLeft='400px'
star1.style.marginTop='300px';
//div content
content.setAttribute("class","content");
// document.body.addEventListener("load",function(){

// });
//content.setAttribute("onload","increaseOpacity(this)");
document.body.appendChild(content);
console.log(content)
//div text
text.setAttribute("class","text");
content.appendChild(text);
//h2
head2.textContent="Play Cafe";
text.appendChild(head2);
//p
parag1.textContent="All fun and play — that's the motto of Tediss. The joyous theme brings lively atmosphere to your website and helps you build a beautiful play cafe."
text.appendChild(parag1);
//a -> button
link1.setAttribute("href","#");
link1.setAttribute("onmouseover","changeBackgroundColor(this)");
link1.setAttribute("onmouseleave","resetBackgroundColor(this)");
link1.textContent="Game";
text.appendChild(link1);
// div image
div_Images.setAttribute("class","image");
content.appendChild(div_Images);
//image1
img1.setAttribute("src","homeImages/image1.jpg");
img1.setAttribute("alt","Images");
img1.setAttribute("class","img1");
div_Images.appendChild(img1);

document.write("<br>");
document.write("<br>");
document.write("<br>");
document.write("<br>");
document.write("<br>");
document.write("<br>");
document.write("<br>");


//part2
var content=document.createElement("div");
document.body.appendChild(content);
var text=document.createElement("div");
var head2=document.createElement("h2");
var parag1=document.createElement("p");
var link1=document.createElement("a");
var div_Images=document.createElement("div");
var img1=document.createElement("img");
// stars
//star1
var star1=document.createElement("img");
star1.setAttribute("src","homeImages/star1.png");
star1.setAttribute("class","star");
content.appendChild(star1);
star1.style.marginLeft='600px'
star1.style.marginTop='120px'
//star2
var star1=document.createElement("img");
star1.setAttribute("src","homeImages/star2.png");
star1.setAttribute("class","star2");
content.appendChild(star1);
star1.style.marginLeft='500px'
star1.style.marginTop='450px'
//div content
content.setAttribute("class","content");
//content.setAttribute("onscroll","increaseOpacity");
document.body.appendChild(content);
//content.addEventListener("load",function(){increaseOpacity(this)})
/* increaseOpacity(content);
console.log(555555) */

//div text
text.setAttribute("class","text");
content.appendChild(text);
text.style.marginRight='800px';
//h2
head2.textContent="Parties & Events";
text.appendChild(head2);
//p
parag1.textContent="Organize parties and events with ease! Tediss provides you with the built-in Events Calendar plugin, which makes organizing events a breeze."
text.appendChild(parag1);

//a -> button
link1.setAttribute("href","#");
link1.setAttribute("onmouseover","changeBackgroundColor(this)");
link1.setAttribute("onmouseleave","resetBackgroundColor(this)");
link1.textContent="Game";
text.appendChild(link1);
// div image
div_Images.setAttribute("class","image");
content.appendChild(div_Images);
// image2
img1.setAttribute("src","homeImages/image2.jpg");
img1.setAttribute("alt","Images");
img1.setAttribute("class","img1");
div_Images.appendChild(img1);
img1.style.marginLeft='800px';



//part3
var content=document.createElement("div");
document.body.appendChild(content);
var text=document.createElement("div");
var head2=document.createElement("h2");
var parag1=document.createElement("p");
var link1=document.createElement("a");
var div_Images=document.createElement("div");
var img1=document.createElement("img");
//star1
var star1=document.createElement("img");
star1.setAttribute("src","homeImages/star1.png");
star1.setAttribute("class","star");
content.appendChild(star1);
star1.style.marginLeft='770px'
star1.style.marginTop='200px'
//div content
content.setAttribute("class","content");
content.setAttribute("onscroll","increaseOpacity(this)");
document.body.appendChild(content);
//div text
text.setAttribute("class","text");
content.appendChild(text);
text.style.marginRight='100px';
//h2
head2.textContent="Childcare Center";
text.appendChild(head2);
//p
parag1.textContent="Organize parties and events with ease! Tediss provides you with the built-in Events Calendar plugin, which makes organizing events a breeze."
text.appendChild(parag1);

//a -> button
link1.setAttribute("href","#");
link1.setAttribute("onmouseover","changeBackgroundColor(this)");
link1.setAttribute("onmouseleave","resetBackgroundColor(this)");
link1.textContent="Game";
text.appendChild(link1);
// div image
div_Images.setAttribute("class","image");
content.appendChild(div_Images);
// image2
img1.setAttribute("src","homeImages/image3.jpg");
img1.setAttribute("alt","Images");
img1.setAttribute("class","img1");
div_Images.appendChild(img1);
img1.style.marginLeft='100px';

document.write("<br>");



function changeBackgroundColor(link){
    setTimeout(function(){
        link.style.backgroundColor="rgb(30, 30, 95)"
        link.style.transition="0.8s"
    },100)
}
function resetBackgroundColor(link){
    link.style.backgroundColor="#fd5c37"
}


/*  function increaseOpacity(op){
    console.log(op.style.opacity)
    setInterval(function(){
        if(op.style.opacity==1){
        op.style.opacity -= "0.1";
        console.log(op.style.opacity)
        }
    }, 50);
    console.log(op.style.opacity)
} */


/*  function visible(){
    setTimeout(() => {
        var txt=document.getElementsByClassName("text");
        var img1=document.getElementsByClassName("img1");
        for(var i=0;i<txt.length;i++){
        txt[i].style.visibility="visible";
        txt[i].style.transition="0.8s";
        }
        for(var i=0;i<txt.length;i++){
        img1[i].style.visibility="visible";
        img1[i].style.transition="0.8s";
        }
        
    }, 100);

   
} */

/* function moveRight(){
    var img=document.getElementById("img1");
   img.style.visibility="visible";
   setInterval( function () {
   img.style.left = parseInt(img.style.left) + 5 + 'px'; 
    },50)
} */

var stop_interval=setInterval(changeDiv,3000)


          
            
