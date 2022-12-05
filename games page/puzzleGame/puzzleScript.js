var dragelement
var n =16;
var random = Array.from({length: n}, (item, index) => index);
var chooses=[]
var succees_audio= document.createElement("audio")
succees_audio.setAttribute("src","sounds/success.mp3")
var fail_audio=document.createElement("audio")
fail_audio.setAttribute("src","sounds/fail.wav")
var winner_audio=document.createElement("audio")
winner_audio.setAttribute("src","sounds/winner.mp3")




function styleOfPuzzleDivs(div,puzzleid){
    

    div.style.width="130px"
    div.style.height="130px"
    div.style.float="left"
    div.style.margin="2px"
   
    if(["4","8","12"].includes(div.getAttribute("id"))){

        var back=String(parseInt(div.getAttribute("id"))-1)
        var divback=document.getElementById(back)
        divback.style.clear="right"
        div.style.clear="left";
    }
    div.addEventListener("dragover",function(event){
        event.preventDefault()
       
        event.target.style.border="2.5px solid blue"
              
    })
    div.addEventListener("dragleave",function(event){
        console.log("drag leave")
        

        event.target.style.border="none"


    })
    div.addEventListener("drop",function (event){
       
         event.target.style.border="none"

        if(dragelement.getAttribute("id") == div.id){
    
           var img1= div.childNodes[0]
           img1src=img1.getAttribute("src")
           img1id=img1.getAttribute("id")
          
          
           img2=dragelement
           img1.setAttribute("src",img2.getAttribute("src"))
           img1.setAttribute("id",img2.getAttribute("id"))
         
           img2.setAttribute("src",img1src)
           img2.setAttribute("id",img1id)
           succees_audio.play()
    

        }
        else{
           var img1= div.childNodes[0]
           img1src=img1.getAttribute("src")
           img1id=img1.getAttribute("id")
          
           img2=dragelement
           img1.setAttribute("src",img2.getAttribute("src"))
           img1.setAttribute("id",img2.getAttribute("id"))
         
           img2.setAttribute("src",img1src)
           img2.setAttribute("id",img1id)
           fail_audio.play()
          
        }
        if(checkWinner()) {
            succees_audio.pause();
            succees_audio.currentTime = 0;

            winner_audio.play()
            
        }

        

    })
    
    
    
    createImage(div,puzzleid)


}

function createImage(div,puzzleid){
    var randomValue;
    do{
        randomValue=Math.floor(Math.random() * random.length);
    }while(chooses.includes(randomValue))
    chooses.push(randomValue)
    var img=document.createElement("img")
    img.setAttribute("id",String(randomValue))
    img.setAttribute("src","puzzle/"+puzzleid+"/"+randomValue+".png")
    img.style.width="130px"
    img.style.height="130px"
    img.setAttribute("draggable","true")
    img.addEventListener("dragstart",function (event){
        succees_audio.pause();
        succees_audio.currentTime = 0;
        fail_audio.pause()
        fail_audio.currentTime = 0;

        console.log("dragstart")
        dragelement=event.target
    })
    div.appendChild(img)


}


//nor -> numberOfRows  noc -> numberOfCoulmus  
function createPuzzleBackground(puzzleid){
    
    index=0;
    var  puzzleBackgroundDiv=document.createElement("div")
    puzzleBackgroundDiv.setAttribute("id","puzzleBackground")
    puzzleBackgroundDiv.style.border="5px solid pink"
    puzzleBackgroundDiv.style.width="539px"
    puzzleBackgroundDiv.style.height="539px"
    puzzleBackgroundDiv.style.float="left"
    puzzleBackgroundDiv.style.marginLeft="10%"
    
    document.getElementById("gameDiv").innerHTML=""
    document.getElementById("gameDiv").style.padding="10px"
    document.getElementById("gameDiv").appendChild(puzzleBackgroundDiv)
    
    var div
    for(var row=0;row<4;row++){
        
        for(var col=0;col<4;col++){           
           div=document.createElement("div")
    
           var id=String(index)
           div.setAttribute("id",id)
           puzzleBackgroundDiv.appendChild(div)
           styleOfPuzzleDivs(div,puzzleid)           
           ++index
        }
    }
}
function checkWinner(){
   var puzzlediv=document.getElementById("gameDiv").childNodes[0]
   console.log(puzzlediv)

   
   var puzzledivs=puzzlediv.childNodes
   var div
   match=0
   puzzledivs.forEach(div => {
    var img=div.firstChild
    if(img.getAttribute("id")==div.getAttribute("id")){
        match++
    }

    
   });
   if(match==16){
        var puzzlediv
       puzzledivs.forEach(  puzzlediv => {
        
        puzzlediv.style.margin="0px"
        
       })
       return true
    }    
}
function gameLoad(){
    var randomColor=["yellow","pink","lightGreen","lightBlue"]
    var gamediv= document.createElement("div")
    gamediv.setAttribute("id","gameDiv")
    gamediv.style.width="100%"
    gamediv.style.height="550px"
    gamediv.style.border="2px dashed pink"
    gamediv.style.boxShadow=" 0px 8px 16px 0px rgba(0, 0, 0, 0.2)"
    gamediv.style.textAlign="center"
    gamediv.style.verticalAlign="middle";
    gamediv.style.paddingTop ="100px"; 
    
    
    var gametiltle="Puzzle"
    for(var i=0;i<gametiltle.length;i++){
        var titlespan=document.createElement("span")
        titlespan.textContent=gametiltle[i]
        var choose=Math.floor(Math.random()*4)
        titlespan.style.color=randomColor[choose]
        titlespan.style.border="1px solid pink"
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
        choosePuzzlePage()
      
    })


    




}
function onClickChoosePuzzle(id,src){
       createPuzzleBackground(id)
       console.log(id)
       ///we stop here

       var originalImage=document.createElement("img")

       originalImage.setAttribute("src",src)
        originalImage.style.width="200px"  
        originalImage.style.height="200px" 
        originalImage.style.border="1px solid lightblue"  

       document.getElementById("gameDiv").appendChild(originalImage)

}
function createImgStyle(src,id){
    var puzzleImg=document.createElement("img")
    puzzleImg.setAttribute("id",id)
    puzzleImg.setAttribute("src",src)
    puzzleImg.style.width="200px"
    puzzleImg.style.height="200px"
    puzzleImg.style.cursor="pointer"
    puzzleImg.style.margin="5%"
    
    puzzleImg.addEventListener("mouseover",function(){
        puzzleImg.style.transform="scale(1.5)"
        puzzleImg.style.border="1px dashed pink"
        puzzleImg.style.borderRadius="5px"

    })
    puzzleImg.addEventListener("mouseleave",function(){
        puzzleImg.style.transform="scale(1)"
        puzzleImg.style.border="1px solid pink"
        puzzleImg.style.borderRadius="5px"

    })
    puzzleImg.addEventListener("click",function(){
        onClickChoosePuzzle(id,src)
        

    })
    return puzzleImg

}
function choosePuzzlePage(){
    document.getElementById("gameDiv").innerHTML=""
    var choosePuzzleDiv=document.createElement("div")
    choosePuzzleDiv.style.display="flex"
    var elephant_puzzle=createImgStyle("puzzle/elephant/elephant.png","elephant")
    choosePuzzleDiv.appendChild(elephant_puzzle)
    var animal_puzzle=createImgStyle("puzzle/animals/animals.jpg","animals")
    choosePuzzleDiv.appendChild(animal_puzzle)
    var ant_puzzle=createImgStyle("puzzle/ant/ant.jpg","ant")
    choosePuzzleDiv.appendChild(ant_puzzle)    


    document.getElementById("gameDiv").appendChild(choosePuzzleDiv)


}

gameLoad()

