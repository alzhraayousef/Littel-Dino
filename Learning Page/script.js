var contentDiv=document.createElement("div");
contentDiv.setAttribute("id","contentDiv");
document.body.appendChild(contentDiv);

var quizDiv=document.createElement("div");
quizDiv.setAttribute("id","quizDiv");

var linkquizpage=document.createElement("a");
//linkquizpage.setAttribute("href","")
var quizImg=document.createElement("img");
quizImg.setAttribute("id","quizImg");
quizImg.setAttribute("src","LearningImgs/quiz_img.jpg")
linkquizpage.appendChild(quizImg)
quizDiv.appendChild(linkquizpage);

var quizParagraph=document.createElement("p");
quizParagraph.setAttribute("id","quizParagraph");
quizParagraph.innerHTML="Quiz";
quizDiv.appendChild(quizParagraph);

var quizDiscribe=document.createElement("p");
quizDiscribe.setAttribute("id","quizDiscribe")
quizDiscribe.innerHTML="Answer these questions to test your ,<br>intelligence in general information."
quizDiv.appendChild(quizDiscribe)
contentDiv.appendChild(quizDiv);

var floatDiv=document.createElement("div")
floatDiv.setAttribute("id","floatDiv");
contentDiv.appendChild(floatDiv)



var mathDiv=document.createElement("div");
mathDiv.setAttribute("id","mathDiv");

var linkmathpage=document.createElement("a")
linkmathpage.setAttribute("href","Final_JS/start.html")
var mathImg=document.createElement("img");
mathImg.setAttribute("id","mathImg");
mathImg.setAttribute("src","LearningImgs/math.jpg")
linkmathpage.appendChild(mathImg)

mathDiv.appendChild(linkmathpage);

var mathParagraph=document.createElement("p");
mathParagraph.setAttribute("id","mathParagraph");
mathParagraph.innerHTML="Math-4-Kids";
mathDiv.appendChild(mathParagraph);

var mathDiscribe=document.createElement("p");
mathDiscribe.setAttribute("id","mathDiscribe")
mathDiscribe.innerHTML="Answer these questions to test your ,<br>intelligence in mathematical operations."
mathDiv.appendChild(mathDiscribe)
contentDiv.appendChild(mathDiv);

var floatDiv=document.createElement("div")
floatDiv.setAttribute("id","floatDiv");
contentDiv.appendChild(floatDiv)


var facePartDiv=document.createElement("div");
facePartDiv.setAttribute("id","facePartDiv");

var facePartImg=document.createElement("img");
facePartImg.setAttribute("id","facePartImg");
facePartImg.setAttribute("src","LearningImgs/facePart.PNG")
facePartDiv.appendChild(facePartImg);

var facePartParagraph=document.createElement("p");
facePartParagraph.setAttribute("id","facePartParagraph");
facePartParagraph.innerHTML="Face Parts";
facePartDiv.appendChild(facePartParagraph);

var facePartDiscribe=document.createElement("p");
facePartDiscribe.setAttribute("id","facePartDiscribe")
facePartDiscribe.innerHTML="Answer these questions to test your ,<br>intelligence in the power of observation."
facePartDiv.appendChild(facePartDiscribe)
contentDiv.appendChild(facePartDiv);
