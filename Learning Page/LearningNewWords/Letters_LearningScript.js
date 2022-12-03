
var letters = [
    { Name:'A',img0:{src:'images/Airplane.jpg',flag:true}, img1:{src:'images/Ambulance.jpg',flag:true}, img2:{ src:'images/Ant.jpg',flag:true}, img3:{src:'images/Apple.jpg',flag:true} } ,
    { Name:'B',img0:{src:'images/Ball.jpg',flag:true}, img1:{src:'images/Bear.jpg',flag:true}, img2:{ src:'images/Boat.jpg',flag:true}, img3:{src:'images/Book.jpg',flag:true} } ,
    { Name:'C', img0:{src:'images/Cake.jpg',flag:true}, img1:{ src:'images/Calender.jpg',flag:true}, img2:{src:'images/Camel.jpg',flag:true}, img3:{src:'images/Crab.jpg',flag:true} } ,
    { Name:'D',img0:{src:'images/Dog.jpg',flag:true}, img1:{ src:'images/Dolphin.jpg',flag:true}, img2:{ src:'images/Door.jpg',flag:true}, img3:{ src:'images/Duck.jpg',flag:true} } ,
    { Name:'E',img0:{src:'images/Eagle.jpg',flag:true}, img1:{ src:'images/Earth.jpg',flag:true}, img2:{src:'images/Egg.jpg',flag:true}, img3:{ src:'images/Elephant.jpg',flag:true} } ,
    { Name:'F',img0:{src:'images/Fish.jpg',flag:true}, img1:{src:'images/Flamingo.jpg',flag:true}, img2:{src:'images/Flower.jpg',flag:true}, img3:{ src:'images/Frog.jpg',flag:true} } ,
    { Name:'G',img0:{src:'images/Gift.jpg',flag:true}, img1:{src:'images/Gloves.jpg',flag:true}, img2:{ src:'images/Goose.jpg',flag:true}, img3:{src:'images/Grapes.jpg',flag:true} } ,
    { Name:'H',img0:{src:'images/Hamburger.jpg',flag:true}, img1:{src:'images/Heart.jpg',flag:true}, img2:{ src:'images/Hen.jpg',flag:true}, img3:{src:'images/House.jpg',flag:true} } ,
    { Name:'I',img0:{src:'images/Ice Cream.jpg',flag:true}, img1:{src:'images/Ice.jpg',flag:true}, img2:{ src:'images/Insect.jpg',flag:true}, img3:{src:'images/Island.jpg',flag:true} } ,
    { Name:'J',img0:{src:'images/Jacket.jpg',flag:true}, img1:{src:'images/Jelly.jpg',flag:true}, img2:{ src:'images/Jellyfish.jpg',flag:true}, img3:{src:'images/Jewelry.jpg',flag:true} } ,
    { Name:'K',img0:{src:'images/Ketchup.jpg',flag:true}, img1:{src:'images/Keys.jpg',flag:true}, img2:{ src:'images/Kitten.jpg',flag:true}, img3:{src:'images/Koala.jpg',flag:true} } ,
    { Name:'L',img0:{src:'images/Lamp.jpg',flag:true}, img1:{src:'images/Lemon.jpg',flag:true}, img2:{ src:'images/Lion.jpg',flag:true}, img3:{src:'images/Log.jpg',flag:true} } , 
    { Name:'M',img0:{src:'images/Mask.jpg',flag:true}, img1:{src:'images/Mirror.jpg',flag:true}, img2:{ src:'images/Muffin.jpg',flag:true}, img3:{src:'images/Mushroom.jpg',flag:true} } ,
    { Name:'N',img0:{src:'images/Needle.jpg',flag:true}, img1:{src:'images/Nest.jpg',flag:true}, img2:{ src:'images/Newspaper.jpg',flag:true}, img3:{src:'images/Nut.jpg',flag:true} } ,
    { Name:'O',img0:{src:'images/Oar.jpg',flag:true}, img1:{src:'images/Oil.jpg',flag:true}, img2:{ src:'images/Orange.jpg',flag:true}, img3:{src:'images/Ostrich.jpg',flag:true} } ,
    { Name:'P',img0:{src:'images/Pail.jpg',flag:true}, img1:{src:'images/Pie.jpg',flag:true}, img2:{ src:'images/Pumpkin.jpg',flag:true}, img3:{src:'images/Pyramid.jpg',flag:true} } ,
    { Name:'Q',img0:{src:'images/Quack.jpg',flag:true}, img1:{src:'images/Quail.jpg',flag:true}, img2:{ src:'images/Queue .jpg',flag:true}, img3:{src:'images/Quilt.jpg',flag:true} } ,
    { Name:'R',img0:{src:'images/Rabbit.jpg',flag:true}, img1:{src:'images/Robot.jpg',flag:true}, img2:{ src:'images/Rock.jpg',flag:true}, img3:{src:'images/Rocket.jpg',flag:true} } ,
    { Name:'S',img0:{src:'images/Sink.jpg',flag:true}, img1:{src:'images/Snail.jpg',flag:true}, img2:{ src:'images/Socks .jpg',flag:true}, img3:{src:'images/Star.jpg',flag:true} } ,
    { Name:'T',img0:{src:'images/Table.jpg',flag:true}, img1:{src:'images/Telephone.jpg',flag:true}, img2:{ src:'images/Tiger.jpg',flag:true}, img3:{src:'images/Tree.jpg',flag:true} } ,
    { Name:'U',img0:{src:'images/Umbrella.jpg',flag:true}, img1:{src:'images/unicycle.jpg',flag:true}, img2:{ src:'images/Uncle.jpg',flag:true}, img3:{src:'images/utensils.jpg',flag:true} } ,
    { Name:'V',img0:{src:'images/Van.jpg',flag:true}, img1:{src:'images/Vase.jpg',flag:true}, img2:{ src:'images/Vegetables.jpg',flag:true}, img3:{src:'images/Volcano.jpg',flag:true} } ,
    { Name:'W',img0:{src:'images/Watermelon.jpg',flag:true}, img1:{src:'images/Wheel.jpg',flag:true}, img2:{ src:'images/Window.jpg',flag:true}, img3:{src:'images/Worm.jpg',flag:true} } ,
    { Name:'X',img0:{src:'images/X-ray.jpg',flag:true}, img1:{src:'images/Xylose.jpg',flag:true}, img2:{src:'images/Xylograph.jpg',flag:true}, img3:{src:'images/Xerophyte.jpg',flag:true} },
    { Name:'Y',img0:{src:'images/Yacht.jpg',flag:true}, img1:{src:'images/Yam.jpg',flag:true}, img2:{ src:'images/Yarn.jpg',flag:true}, img3:{src:'images/Yo-yo.jpg',flag:true} } ,
    { Name:'Z',img0:{src:'images/Zebra.jpg',flag:true}, img1:{src:'images/Zero.jpg',flag:true}, img2:{ src:'images/Zoo.jpg',flag:true}, img3:{src:'images/Zucchini.jpg',flag:true} } ,

];

var buttonsDiv = document.createElement("div");
buttonsDiv.style=` position: absolute; left:150px; width:1200px; padding:30px; top:130px;`;

var informationDiv = document.createElement("div");
informationDiv.style=`border:3px solid pink;  position: absolute; left:60px ; top:130px;
                     width:1300px; height:400px; padding:50px; padding-top:280px ;z-index:-1`;
var letterButton, letterImage, letterWord;

var GameTitle= document.createElement("h1");
GameTitle.style=`color:rgb(14, 14, 100); text-align:center`;
GameTitle.appendChild(document.createTextNode("Click on buttons to learn new words"));
buttonsDiv.appendChild(GameTitle);

// Using for loop for print (A-Z):
for (var index=0; index<letters.length; index++) //(var i = 65; i <= 90; i++) 
{
    //console.log(String.fromCharCode(i));
    letterButton = document.createElement("button");
    letterButton.style=`width:80px; height:50px; margin:5px; font-size:30px;cursor: pointer;
                        background-color:pink; color:rgb(14, 14, 100); border:1px solid rgb(14, 14, 100)`;
    letterButton.addEventListener("mouseover",function(e){
                         e.target.style.backgroundColor='rgb(246, 147, 163)'} );
    letterButton.addEventListener("mouseout",function(e) {
                           e.target.style.backgroundColor='pink'; } );
    letterButton.textContent = letters[index].Name; //String.fromCharCode(i)
    letterButton.addEventListener("click",function(){ getInformation(this) } );
    buttonsDiv.appendChild(letterButton);
}
document.body.appendChild(buttonsDiv);
document.body.appendChild(informationDiv);


var letter, keys, letterImage, imageSrc ;
function getInformation(element)
{
    var index=0;
    while(letters[index].Name!=element.textContent)
    {
        index++;
    }
    letter = letters[index];
    keys = Object.keys(letter);
    keys = keys.slice(1,keys.length); // remove name:'A'
    var flagW = true;
    do
    {
        letterImage = letter[keys[Math.floor(Math.random() * keys.length)]];
        if(letterImage.flag==true)
        {
            letterImage.flag=false;
            flagW = false;
        }
        else
        {
            if( (letter[keys[0]].flag==false && letter[keys[1]].flag==false 
                && letter[keys[2]].flag==false &&letter[keys[3]].flag==false))
                {
                    for(var i=0; i<keys.length;i++)
                    {
                        letter[keys[i]].flag=true; 
                    }   
                }
        }

    } while(flagW);

    console.log(letterImage.flag,letterImage.src) ;
    imageSrc = letterImage.src;
    letterImage = document.createElement("img");
    letterImage.style=`margin-left:170px;width:550px;height:380px;float:left; margin-right:140px`;
    letterImage.setAttribute("src",imageSrc);
    informationDiv.innerHTML="";
    informationDiv.appendChild(letterImage);
    letterWord = document.createElement("p");
    letterWord.style=`font-size:80px; color:rgb(14, 14, 100);  margin-top:150px; `;
    letterWord.appendChild(document.createTextNode(imageSrc.slice(7,imageSrc.indexOf('.'))));
    informationDiv.appendChild(letterWord);
}
