
var rspDiv = document.createElement("div");
rspDiv.style="position:relative ; text-align:center; height:300px; color:rgb(14, 14, 100);margin-bottom:150px";
document.body.appendChild(rspDiv);

var gameInfo = document.createElement("h1");
gameInfo.innerHTML=  "Rock, Paper, Scissors";
rspDiv.appendChild(gameInfo);



gameInfo = document.createElement("h3");
gameInfo.innerHTML=  "Select either rock, paper, or scissors and see if you can beat the computer!<br>Remember: \"Rock breaks scissors, scissors cuts paper, paper covers rock.\" ";document.body.appendChild(gameInfo);
rspDiv.appendChild(gameInfo);

var rockButton = document.createElement("button");
rockButton.value="rock";
rockButton.style=`margin-right:30px; border:1px solid rgb(14, 14, 100); background-color:pink`;
var rockImg = document.createElement("img");
rockImg.src="images/rock.png";
rockButton.appendChild(rockImg);
rspDiv.appendChild(rockButton);

var paperButton = document.createElement("button");
paperButton.value="paper";
paperButton.style=`margin-right:30px; border:1px solid rgb(14, 14, 100); background-color:pink`;
var paperImg = document.createElement("img");
paperImg.src="images/paper.png";
paperButton.appendChild(paperImg);
rspDiv.appendChild(paperButton);

var scissorsButton = document.createElement("button");
scissorsButton.value="scissors";
scissorsButton.style=`margin-right:30px; border:1px solid rgb(14, 14, 100); background-color:pink`;
var scissorsImg = document.createElement("img");
scissorsImg.src="images/scissors.png";
scissorsButton.appendChild(scissorsImg);
rspDiv.appendChild(scissorsButton);

var choices = ["rock","paper","scissors"];
var computerCounter=0 , playerCounter=0, computerChoice, playerChoice;
var counterInfo, result, choice;

var resultDiv = document.createElement("div");
resultDiv.style=`text-align:center; font-size:20px; color:rgb(14, 14, 100);margin-top:30px`;

counterInfo = document.createElement("p");
choice = document.createElement("p");
result = document.createElement("p");


var buttons = document.querySelectorAll("button");
for(var index=0 ; index<buttons.length; index++)
{
    buttons[index].addEventListener("click", function(e){
        computerChoice = choices[Math.floor(Math.random()*3)];
        playerChoice = e.currentTarget.value;
        console.log(playerChoice);
        // player win cases
        if( (playerChoice=="rock" && computerChoice=="scissors" ) || 
            (playerChoice=="paper" && computerChoice=="rock" ) || 
             (playerChoice=="scissors" && computerChoice=="paper")  )
        {
            playerCounter++;
            counterInfo.innerHTML="Player: "+ playerCounter +" , Computer:"+computerCounter;
            resultDiv.appendChild(counterInfo);

            choice.innerHTML="Player: "+ playerChoice +" , Computer: "+computerChoice;
            resultDiv.appendChild(choice);

            var audio = document.getElementById("rightaudio");
            audio.play();
            result.innerHTML="Player wins!";
            resultDiv.appendChild(result);

            rspDiv.appendChild(resultDiv);

           


        }
        else if((playerChoice=="scissors" && computerChoice=="rock" ) || 
               (playerChoice=="rock" && computerChoice=="paper" ) || 
               (playerChoice=="paper" && computerChoice=="scissors"))
               {
                computerCounter++;
                counterInfo.innerHTML="Player: "+ playerCounter +" , Computer:"+computerCounter;
                resultDiv.appendChild(counterInfo);

                choice.innerHTML="Player: "+ playerChoice +" , Computer: "+computerChoice;
                resultDiv.appendChild(choice);

                var audio = document.getElementById("wrongaudio");
                audio.play();
                result.innerHTML="Computer wins!";
                resultDiv.appendChild(result);

                rspDiv.appendChild(resultDiv);

                

               }
            else{
                counterInfo.innerHTML="Player: "+ playerCounter +" , Computer:"+computerCounter;
                resultDiv.appendChild(counterInfo);

                choice.innerHTML="Player: "+ playerChoice +" , Computer: "+computerChoice;
                resultDiv.appendChild(choice);

                result.innerHTML="Draw it's a tie!";
                resultDiv.appendChild(result);

                rspDiv.appendChild(resultDiv);

                }
    });
}

