
//head game
var div1=document.createElement("div");
div1.setAttribute("id","div1");
document.body.appendChild(div1);
var head3=document.createElement("h3");
head3.setAttribute("id","head3");
var span1=document.createElement("span");
span1.setAttribute("id","span1");
span1.innerHTML="Me";
head3.appendChild(span1);
var span2=document.createElement("span");
span2.setAttribute("id","span2");
span2.innerHTML+="mory";
head3.appendChild(span2);
var span3=document.createElement("span");
span3.setAttribute("id","span3");
span3.innerHTML+=" Ga";
head3.appendChild(span3);
var span4=document.createElement("span");
span4.setAttribute("id","span4");
span4.innerHTML+="me";
head3.appendChild(span4);
div1.appendChild(head3);
console.log(div1)

//button
var div2=document.createElement("div");
div2.setAttribute("id","div2");
document.body.appendChild(div2);
var button=document.createElement("a");
button.setAttribute("href","game.html");
button.innerHTML="Start Game";
div2.appendChild(button);


