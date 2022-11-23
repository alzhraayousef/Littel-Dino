var divPointer=0
var time=0
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
    var mainDiv=document.createElement("div")
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
    
    document.getElementById("body").appendChild(mainDiv)

}

function changeDiv(){

    var currentDiv=document.getElementById("mainDiv")
    console.log("in chang div",divPointer)
    if(divPointer==0){
        console.log(" in slide 0",divPointer)
        if(currentDiv!=null){
            document.getElementById("body").removeChild(document.getElementById("mainDiv"))
        }
        divPointer=divPointer+1;        

        createMainDiv("#faf5e1","Learning","Learn and discover more","homeImages/baby-2.png")
    }
    else if(divPointer==1){
        console.log(" in slide 1",divPointer)
        
        document.getElementById("body").removeChild(document.getElementById("mainDiv"))
        divPointer=divPointer+1
        createMainDiv("#e1fae6","Story","Listen to interesting stories","homeImages/banner-2.png") 
        
    }
    else if(divPointer==2){
        console.log(" in slide 2",divPointer)
        document.getElementById("body").removeChild(document.getElementById("mainDiv"))
        divPointer=0
        createMainDiv("#d1f7f9","Fun & Playing","Fun and play with different Games","homeImages/banner-5.png")
    }




}

changeDiv()
var stop_interval=setInterval(changeDiv,3000)