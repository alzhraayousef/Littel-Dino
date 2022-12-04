var gussNumberDiv = document.createElement("div");
gussNumberDiv.style=`text-align:center`;
document.body.appendChild(gussNumberDiv);

var gameInfo = document.createElement("h1");
gameInfo.appendChild( document.createTextNode("Number guessing game") );
gameInfo.style = `margin-left:400px; width:700px; background-color:pink; border-radius:20px ;color:rgb(14, 14, 100)`;
gussNumberDiv.appendChild(gameInfo);

gameInfo = document.createElement("h3");
gameInfo.appendChild( document.createTextNode("Try and guess a random number between 1 and 100.") );
gameInfo.style = `color:rgb(14, 14, 100)`;
gussNumberDiv.appendChild(gameInfo);

gameInfo = document.createElement("h3");
gameInfo.appendChild( document.createTextNode("You have 10 attempts to guess the right number.") );
gameInfo.style = `color:rgb(14, 14, 100)`;
gussNumberDiv.appendChild(gameInfo);



var gameDiv = document.createElement("div");
gameDiv.style = `padding-top:50px; margin-left:400px;background-color:pink ; border-radius:20px; width:700px; height:520px`;

gameInfo = document.createElement("h1");
gameInfo.appendChild( document.createTextNode("Guess Number") );
gameInfo.style = `color:rgb(14, 14, 100);text-align:center`;
gameDiv.appendChild(gameInfo);

var randomNumber = Math.floor(Math.random()*100);
console.log(randomNumber);

var Previous_Guesses = document.createElement("p");
Previous_Guesses.innerHTML = "Previous Guesses: ";
gameDiv.appendChild(Previous_Guesses);

var Guesses_Remaining = document.createElement("p");
Guesses_Remaining.innerHTML = "Guesses Remaining: 10 ";
gameDiv.appendChild(Guesses_Remaining);

gussNumberDiv.appendChild(gameDiv);

 
var counter = 10;
var inputNum = document.createElement("input");
inputNum.style=`text-align:center ; border-radius:20px; font-size:30px; width:450px; height:70px; margin-right:50px; margin-left:60px; margin-bottom:20px`;
gameDiv.appendChild(inputNum);

var buttonSumbit = document.createElement("button");
buttonSumbit.textContent = "Submit Guess";
buttonSumbit.style=`width:200px; height:50px ; border-radius:20px; background-color:rgb(14, 14, 100); color:pink; font-size:20px`;
gameDiv.appendChild(buttonSumbit);

var hent1 = document.createElement("h1");
hent1.innerHTML="";
gameDiv.appendChild(hent1);

var hent2 = document.createElement("h1");
hent2.innerHTML=""; 
gameDiv.appendChild(hent2);



buttonSumbit.addEventListener("click", function(){
    
    if(inputNum.value=="" || Number.isFinite(inputNum.value))
    {
        var audio = document.getElementById("wrongaudio");
        audio.play();
        alert("Please enter a valid numbe");
    }
    else
    {
        if(inputNum.value==randomNumber)
        {
            Previous_Guesses.innerHTML+= " "+inputNum.value ;
            var audio = document.getElementById("rightaudio");
            audio.play();
            hent1.innerHTML= "You Gussed correctly!";
            counter--;
            Guesses_Remaining.innerHTML= "Guesses Remaining: "+counter;
            hent2.innerHTML= "Start new Game!";
            buttonSumbit.setAttribute("disabled",'');
            inputNum.value="";
            inputNum.setAttribute("disabled",'');
            // hent2.addEventListener("click",function(){

            // })
        }
        else if(counter==0)
        {
            var audio = document.getElementById("wrongaudio");
                audio.play();
                hent1.innerHTML= "Game Over ! Number was "+randomNumber;
                hent2.innerHTML= "Start new Game!";
                buttonSumbit.setAttribute("disabled",'');
                inputNum.value="";
                inputNum.setAttribute("disabled",'');
        }
        else
        {
            if(inputNum.value>randomNumber)
            {
                Previous_Guesses.innerHTML+= " "+inputNum.value ;
                hent1.innerHTML= "Too High! Try again!";
                counter--;
                Guesses_Remaining.innerHTML= "Guesses Remaining: "+counter;
                
            }
            else 
            {
                Previous_Guesses.innerHTML+= " "+inputNum.value ;
                hent1.innerHTML= "Too Low! Try again!";
                counter--;
                Guesses_Remaining.innerHTML= "Guesses Remaining: "+counter;
            }
        }
    }
});
