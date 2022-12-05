var divPointer=0
var mainDiv=document.createElement("div")
var stop_interval
document.getElementById("body").appendChild(mainDiv)

function contentDivElements(div,h1,p,divid){
   
    var heading=document.createElement("h1")
    heading.textContent=h1
    heading.setAttribute("id","contentDiv-h1")
    div.appendChild(heading)
    var para=document.createElement("p")
    para.setAttribute("id","contentDiv-p")
    para.textContent=p
    div.appendChild(para)    

    var butt=document.createElement("button")
    butt.setAttribute("id","contentDiv-button")
    butt.textContent="Explore"
    butt.addEventListener("click",function(){
        window.location.href="#"+divid ;


    })
    div.appendChild(butt)    
}
function createMainDiv(backgroundColor,h1,para,imgsrc,divid){
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

        if(divPointer==0){
            divPointer=2
        }
        else{
            divPointer-=1
          }

         
          changeDiv()

    });
    mainDiv.appendChild(backButton)

    
    

    var contentDiv=document.createElement("div")
    contentDiv.setAttribute("id","contentDiv")

    contentDivElements(contentDiv,h1,para,divid)
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
            

        }
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
      

        createMainDiv("#faf5e1","Learning","Learn and discover more","homeImages/baby-2.png","learning")
    }
    else if(divPointer==1){
        
       
        createMainDiv("#e1fae6","Story","Listen to interesting stories","homeImages/banner-2.png","story") 
        
    }
    else if(divPointer==2){
        
        createMainDiv("#d1f7f9","Fun & Playing","Fun and play with different Games","homeImages/banner-5.png","game")
    }




}

changeDiv()
stop_interval=setInterval(function(){

        if(divPointer==2){
            divPointer=0
            changeDiv()

    
        }
        else{
            divPointer+=1
            changeDiv()

        }
       
    },6000)



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
head2.textContent="Learning";
head2.setAttribute("id","learning");

text.appendChild(head2);
//p
parag1.textContent="Teaching children letters, words, mathematical operations and quizzes to develop their skills"
text.appendChild(parag1);
//a -> button
link1.setAttribute("href","LearningPage/home.html");
link1.setAttribute("onmouseover","changeBackgroundColor(this)");
link1.setAttribute("onmouseleave","resetBackgroundColor(this)");
link1.textContent="Go";
text.appendChild(link1);
// div image
div_Images.setAttribute("class","image");
content.appendChild(div_Images);
//image1
img1.setAttribute("src","homeImages/LearningImage.png");
img1.setAttribute("alt","Images");
img1.setAttribute("class","img1");
div_Images.appendChild(img1);

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
head2.textContent="Fun & Playing";
head2.setAttribute("id","game");
text.appendChild(head2);
//p
parag1.textContent="Fun games that help develop intelligence, develop their thinking, and help them think quickly"
text.appendChild(parag1);

//a -> button
link1.setAttribute("href","games page/gamesPage.html");
link1.setAttribute("onmouseover","changeBackgroundColor(this)");
link1.setAttribute("onmouseleave","resetBackgroundColor(this)");
link1.textContent="Go";
text.appendChild(link1);
// div image
div_Images.setAttribute("class","image");
content.appendChild(div_Images);
// image2
img1.setAttribute("src","homeImages/gaming.png");
img1.setAttribute("alt","Images");
img1.setAttribute("class","img1");
div_Images.appendChild(img1);
img1.style.marginLeft='800px';
img1.style.marginTop='-100px';



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
text.style.marginTop='-90px'
//h2
head2.textContent="Story";
head2.setAttribute("id","story");

text.appendChild(head2);
//p
parag1.textContent="Short stories for kids have interesting characters, memorable themes, and teach important lessons"

text.appendChild(parag1);


//a -> button
link1.setAttribute("href","story/stories.html");
link1.setAttribute("onmouseover","changeBackgroundColor(this)");
link1.setAttribute("onmouseleave","resetBackgroundColor(this)");
link1.textContent="Go";
text.appendChild(link1);
// div image
div_Images.setAttribute("class","image");
content.appendChild(div_Images);
// image2
img1.setAttribute("src","homeImages/story1.png");
img1.setAttribute("alt","Images");
img1.setAttribute("class","img1");
div_Images.appendChild(img1);
img1.style.marginLeft='100px';
img1.style.width='600px';
img1.style.marginTop='-110px';
img1.style.marginLeft='150px'
document.write("<br>");



function changeBackgroundColor(link){
    setTimeout(function(){
        link.style.backgroundColor="rgb(30, 30, 95)"
        link.style.transition="0.8s"
    },100)
}
function resetBackgroundColor(link){
    link.style.backgroundColor="rgb(244, 150, 166)"
}
//###########################################################





          
            
