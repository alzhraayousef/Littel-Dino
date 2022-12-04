var quistions = [
    { quistion : " Which animal lays eggs?",
     choices : ["Dog", "Cat", "Duck", "Sheep"],
     correctAnswer : "Duck" },
     
     { quistion : "A male cow is called?",
     choices : ["Ox", "Dog", "Monkey", "Sheep"],
     correctAnswer : "Ox" },

     { quistion : "All animals need food, air, and ____ to survive.",
     choices : ["House", "Water", "Chocolate", "Fruits"],
     correctAnswer : "Water"  },

     { quistion : "Which shape is a round?",
     choices : ["Square", "Circle", "Rectangle", "Triangle"],
     correctAnswer : "Circle"  },

     { quistion : "Dark rain clouds can give out lightning and ____.",
     choices : ["Thunder", "Snow", "Sunlight", "Wind"],
     correctAnswer : "Thunder"  },

     { quistion : "What is the boiling point of water?",
     choices : ["25°C", "50°C", "75°C", "100°C"],
     correctAnswer : "100°C" },

     { quistion : " When you push something, you apply ____.",
     choices : ["Force", "Acceleration", "Mass", "Compression"],
     correctAnswer : "Force" },
];

var quistionsDiv = document.createElement("div") ;
quistionsDiv.style = `position:relative; height:500px; top:70px;
 left:80px ;width:90%; border:3px solid pink; `;//width:700px background-color:rgb(249, 214, 220)

document.body.appendChild(quistionsDiv);

var Quistion = document.createElement("p");
Quistion.style=`position:absolute; color:rgb(14, 14, 100) ; font-size:30px; top:50px `;
quistionsDiv.appendChild(Quistion);

var answersDiv = document.createElement("div");
answersDiv.style=`position:absolute; color:rgb(14, 14, 100) ; font-size:25px;top:150px`;
quistionsDiv.appendChild(answersDiv);

var nextButton = document.createElement("button") ;
nextButton.textContent="Next";
nextButton.style = `position:absolute; color:rgb(14, 14, 100) ; top:350px ;right:400px; width:200px ;
height:40px; background-color:pink; border:1px solid rgb(14, 14, 100) ; border-radius:25px`;
quistionsDiv.appendChild(nextButton);



var checkBox , label;
var breakLine; 
var index =0, flagRemove=false, flagWhile=false, score=0;
displayQuiestion();



function displayQuiestion()
{
    Quistion.animate([
        {left: '0'},
        {left: '550px'}
    ], {
        duration: 500,
        fill: 'forwards'
    });

   answersDiv.animate([
            {left: '0'},
            {left: '550px'}
        ], {
            duration: 500,
            fill: 'forwards'
        });
        

   if(flagRemove==true)
    {
          answersDiv.innerHTML="";
    }

    Quistion.innerHTML = quistions[index].quistion;

    for(var i=0; i<4; i++)
    {
        checkBox = document.createElement("input");
        checkBox.type = "checkbox";
        checkBox.id = "checkbox"+i;
        checkBox.value =  quistions[index].choices[i] ;
        checkBox.style="margin-bottom:15px";

        label = document.createElement('label');
        label.htmlFor = "checkbox"+i;
        label.appendChild(document.createTextNode(quistions[index].choices[i]));
        label.style="margin-bottom:15px";

        answersDiv.appendChild(checkBox);
        answersDiv.appendChild(label);

        breakLine = document.createElement('br');
        answersDiv.appendChild(breakLine);
        flagRemove=true;

    }
}

nextButton.addEventListener("click",function(){
    var checkBoxs = document.querySelectorAll("input");
    console.log(checkBoxs);
    var i=0;
    while( flagWhile==false && i <= checkBoxs.length-1 )
    {
        for(i=0; i<checkBoxs.length; i++)
        {
            if(checkBoxs[i].checked)
            {
                flagWhile=true;
                if(checkBoxs[i].value==quistions[index].correctAnswer)
                {
                    score++;
                }
                break;
            }
        } 
    }
    if(flagWhile==false)
    {
        var audio = document.getElementById("wrongaudio");
        audio.play();
        alert("Please make choice");
        
    }
    else
    {
        flagWhile=false;
        if(index==6)
        {
            var audio = document.getElementById("rightaudio");
            audio.play();
            alert("your score = "+ score+"/"+6);
        }
        else
         {
            index++;
            displayQuiestion();   
        }
       
    }
   
});



