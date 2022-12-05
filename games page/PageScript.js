function CreateDiv(divName,divColor,divWidth,divHeight){
   var Div= document.createElement("div")
   Div.setAttribute("id",divName)
   Div.style.width=divWidth
   Div.style.height=divHeight
   Div.style.backgroundColor=divColor

   return Div

}
function content(Div,iconClass,h1Content){
    var icon=document.createElement("i");
    icon.style.fontSize="100px"
    icon.style.marginTop="50px"
    icon.style.color="#253b70"
    icon.style.display="block"
    icon.setAttribute("class",iconClass)
    var gameTitle=document.createElement("h2");
    gameTitle.style.fontSize="40px"
    gameTitle.style.marginTop="30px"
    gameTitle.style.color="#253b70"
    gameTitle.textContent=h1Content
    
    Div.appendChild(icon)
    Div.appendChild(gameTitle)




}
function gameDiv(divColor,divContent,divIcon){
    
    var outerDiv= CreateDiv("outerDiv",divColor,"300px","400px")
    outerDiv.style.border="1px solid pink"
    outerDiv.style.borderRadius="25px"
    outerDiv.style.position="relative"
    var innerDiv= CreateDiv("innerDiv",divColor,"250px","350px")
    outerDiv.style.transform="scale(0.8,0.8)"
    outerDiv.addEventListener("mouseover",function(){
        outerDiv.style.cursor="pointer"
        innerDiv.style.border="2px dashed #253b70"
        innerDiv.style.borderRadius="25px"
        outerDiv.style.transform="scale(0.9,0.9)"
    })
    innerDiv.style.position="absolute"
    innerDiv.style.marginTop="8%"
    innerDiv.style.marginLeft="8%"
    innerDiv.style.textAlign="center"
    outerDiv.addEventListener("mouseleave",function(){
        innerDiv.style.border="none"
        outerDiv.style.transform="scale(0.8,0.8)"

    })
    outerDiv.appendChild(innerDiv)
    content(innerDiv,divIcon,divContent)
    return  outerDiv
}
function gamesParent(){
    var gamesParent=document.createElement("fieldset")
    gamesParent.style.border="3px solid pink "
    gamesParent.style.borderRadius="25px "
    gamesParent.style.paddingLeft="20% "
    var x = document.createElement("LEGEND");
    var t = document.createTextNode("Funny Games");
    
    x.appendChild(t);
    x.style.fontSize="30px"
    gamesParent.appendChild(x);

    gamesParent.style.display="flex"

    
    var Memory_game=gameDiv("#faf5e1","Memory game","fa-solid fa-equals")
    gamesParent.appendChild(Memory_game)
    Memory_game.addEventListener("click",function(){
        open("Memory-game/start.html","_self")

    })
    
    var CatchDorra=gameDiv("#e1fae6","Catch Dorra","fa-solid fa-hand-fist")
    gamesParent.appendChild(CatchDorra)
    CatchDorra.addEventListener("click",function(){
        open("catch game/game.html","_self")
        
    })
    
    var RPS=gameDiv("rgb(226, 205, 244)","Rock Paper Scissors","fa-solid fa-dice")
    gamesParent.appendChild(RPS)
    RPS.addEventListener("click",function(){
        open("RockPaper/rockpaperPage.html","_self")

        
    })
    document.body.appendChild(gamesParent)
    
    var QuizGames=document.createElement("fieldset")
    QuizGames.style.border="3px solid lightBlue "
    QuizGames.style.borderRadius="25px "
    QuizGames.style.marginTop="5% "
    QuizGames.style.paddingLeft="30% "
    var x = document.createElement("LEGEND");
    var t = document.createTextNode("Brain Games");
    x.style.fontSize="30px"
    
    x.appendChild(t);
    QuizGames.appendChild(x);

    QuizGames.style.display="flex"
    var puzzleGame=gameDiv("#faf5e1","PUZZLE","fa-sharp fa-solid fa-puzzle-piece")
    QuizGames.appendChild(puzzleGame)
    puzzleGame.addEventListener("click",function(){
        open("puzzleGame/puzzle.html","_self")
        
    })
   
    
    var GussNumber=gameDiv("rgb(226, 205, 244)","Guss Number","fa-solid fa-question")
    QuizGames.appendChild(GussNumber)
    GussNumber.addEventListener("click",function(){
        open("Gussnumber/gussNumberPage.html","_self")
        
    })

    document.body.appendChild(QuizGames)


}
gamesParent()
