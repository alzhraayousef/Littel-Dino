var positions=["translate(20px, 100px)","translate(210px, 100px)","translate(390px, 100px)","translate(-170px, 100px)","translate(-370px, 100px)"]
var lastRandom
var winner_audio=document.createElement("audio")
winner_audio.setAttribute("src","sounds/wiin.mp3")
var Stop_interval
var treeDiv
function game()
{
    document.getElementById("gamediv").innerHTML=""
    var gameDiv=document.createElement("div")
    gameDiv.setAttribute("id","gameDiv")  
    gameDiv.style.width="1000px"
    gameDiv.style.height="600px"
    document.getElementById("gamediv").style.paddingTop="0px"
    var doraa= doraaStyle()
    var cloudDiv=document.createElement("div")
    cloudDiv.style.display="flex"
    treeDiv=document.createElement("div")
    treeDiv.style.marginTop="15%"
    treeDiv.style.display="flex"
    for(var i=0;i<3;i++){
       var cloud=cloudStyle()
        cloudDiv.appendChild(cloud)
    }
   doraa.style.display="none"


    for(var i=0;i<5;i++){
        var tree=treeStyle()
        treeDiv.appendChild(tree)
    }
    gameDiv.appendChild(cloudDiv)
    gameDiv.appendChild(doraa)
    gameDiv.appendChild(treeDiv)
    document.getElementById("gamediv").appendChild(gameDiv)
    document.body.style.background="linear-gradient(rgb(166, 200, 248) , rgb(67, 163, 67))"


    

}
function cloudStyle(){
    var cloud=document.createElement("i")
    cloud.setAttribute("class","fa-solid fa-cloud")
    cloud.setAttribute("id","cloudIcon")
    cloud.style.fontSize="150px"
    cloud.style.color="white"

    cloud.style.zIndex="0"
    return cloud
    

}

function treeStyle(){
    var tree=document.createElement("img")
    tree.setAttribute("src","tree.png")
    tree.setAttribute("id","treeImg")
    tree.style.width="200px"
    tree.style.height="300px"
    
    tree.style.zIndex="0"
    return tree

}
function stopImg(){
    clearInterval(Stop_interval)

}
function doraaStyle(){
   var img=document.createElement("img")
    img.setAttribute("src","doraa.png")
    img.setAttribute("id","doraaImg")
    img.style.width="150px"
    img.style.height="150px"
    img.style.zIndex="-1"
    img.style.cursor="pointer"
    img.addEventListener("click",function(event){
       
        stopImg()
        winner_audio.play()
        
    })
    return img
    
   
}
function changePosition(){
    Stop_interval= setInterval(function(){
        do{
            randomValue=Math.floor(Math.random() * positions.length);
        }while(lastRandom==randomValue)
        lastRandom=randomValue
       
    
        console.log(positions[randomValue]);
    
        document.getElementById("doraaImg").style.transform=positions[randomValue];
        treeDiv.style.marginTop="0%"
    
        document.getElementById("doraaImg").style.display="inline"
    
    
    },500) 
    

   

}

function gameLoad(){
    document.body.style.backgroundColor="white"
    var randomColor=["yellow","pink","lightGreen","lightBlue"]
    var gamediv= document.createElement("div")
    gamediv.setAttribute("id","gamediv")
    gamediv.style.width="1000"
    gamediv.style.height="600px"
    gamediv.style.border="2px dashed pink"
    gamediv.style.boxShadow=" 0px 8px 16px 0px rgba(0, 0, 0, 0.2)"
    gamediv.style.textAlign="center"
    gamediv.style.paddingTop ="100px"; 
    
    
    var gametiltle="Catch Doraa"
    for(var i=0;i<gametiltle.length;i++){
        var titlespan=document.createElement("span")
        titlespan.textContent=gametiltle[i]
        var choose=Math.floor(Math.random()*4)
        titlespan.style.color=randomColor[choose]
        titlespan.style.fontSize="150px"
       
       
        gamediv.appendChild(titlespan)

    }
    var takeline=document.createElement("br")
    gamediv.appendChild(takeline)
    var StartButn=document.createElement("button")
    StartButn.textContent="Start"
    StartButn.style.backgroundColor="pink"
    StartButn.style.color="white"
    StartButn.style.marginTop="5%"
    StartButn.style.width="200px"
    StartButn.style.height="100px"
    StartButn.style.border="none"
    StartButn.style.borderRadius="50px"
    StartButn.style.cursor="pointer"
    StartButn.style.fontSize="30px"


    gamediv.appendChild(StartButn)
    StartButn.addEventListener("mouseover",function(){
        StartButn.style.backgroundColor="#253b70"
        StartButn.style.transform="scale(1.1,1.1)"
        
        
    })
    StartButn.addEventListener("mouseleave",function(){
        StartButn.style.backgroundColor="pink"
        StartButn.style.transform="scale(1,1)"
        
        
    })

    document.body.appendChild(gamediv)
    StartButn.addEventListener("click",function(){
        game()
        changePosition()
      
    })


    




}
gameLoad()


