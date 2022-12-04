var contentDiv=document.createElement("div");
contentDiv.setAttribute("id","contentDiv");
document.body.appendChild(contentDiv);


var wordDiv=document.createElement("div");
wordDiv.setAttribute("id","wordDiv");

var linkwordpage=document.createElement("a");
linkwordpage.setAttribute("href","LearningNewWords/Letters LearningPage.html")
var wordImg=document.createElement("img");
wordImg.setAttribute("id","wordImg");
wordImg.setAttribute("src","LearningImgs/new_words.PNG")
linkwordpage.appendChild(wordImg)
wordDiv.appendChild(linkwordpage);

var wordParagraph=document.createElement("p");
wordParagraph.setAttribute("id","wordParagraph");
wordParagraph.innerHTML="Learn New Words";
wordDiv.appendChild(wordParagraph);

var wordDiscribe=document.createElement("p");
wordDiscribe.setAttribute("id","wordDiscribe")
wordDiscribe.innerHTML="Answer these questions to test your ,<br>intelligence in collecting new words."
wordDiv.appendChild(wordDiscribe)
contentDiv.appendChild(wordDiv);

var floatDiv=document.createElement("div")
floatDiv.setAttribute("id","float");
contentDiv.appendChild(floatDiv)

var quizDiv=document.createElement("div");
quizDiv.setAttribute("id","quizDiv");

var linkquizpage=document.createElement("a");
linkquizpage.setAttribute("href","Quiz/quizPage.html")
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
floatDiv.setAttribute("id","float");
contentDiv.appendChild(floatDiv)



var facePartDiv=document.createElement("div");
facePartDiv.setAttribute("id","facePartDiv");

var linkFacePartpage=document.createElement("a");
linkFacePartpage.setAttribute("href","faceParts/FacePartLearning.html")
var facePartImg=document.createElement("img");
facePartImg.setAttribute("id","facePartImg");
facePartImg.setAttribute("src","LearningImgs/facePart.PNG")
linkFacePartpage.appendChild(facePartImg);
facePartDiv.appendChild(linkFacePartpage);

var facePartParagraph=document.createElement("p");
facePartParagraph.setAttribute("id","facePartParagraph");
facePartParagraph.innerHTML="Face Parts";
facePartDiv.appendChild(facePartParagraph);

var facePartDiscribe=document.createElement("p");
facePartDiscribe.setAttribute("id","facePartDiscribe")
facePartDiscribe.innerHTML="Answer these questions to test your ,<br>intelligence in the power of observation."
facePartDiv.appendChild(facePartDiscribe)
contentDiv.appendChild(facePartDiv);


var mathDiv=document.createElement("div");
mathDiv.setAttribute("id","mathDiv");

var linkmathpage=document.createElement("a");
linkmathpage.setAttribute("href","MathOperation/homePage.html")
var mathImg=document.createElement("img");
mathImg.setAttribute("id","mathImg");
mathImg.setAttribute("src","LearningImgs/math.jpg")
linkmathpage.appendChild(mathImg)
mathDiv.appendChild(linkmathpage);

var mathParagraph=document.createElement("p");
mathParagraph.setAttribute("id","mathParagraph");
mathParagraph.innerHTML="MATH-4-KIDS";
mathDiv.appendChild(mathParagraph);

var mathDiscribe=document.createElement("p");
mathDiscribe.setAttribute("id","mathDiscribe")
mathDiscribe.innerHTML="Answer these questions to test your ,<br>intelligence in solving mathematical problems."
mathDiv.appendChild(mathDiscribe)
contentDiv.appendChild(mathDiv);

var floatDiv=document.createElement("div")
floatDiv.setAttribute("id","float");
contentDiv.appendChild(floatDiv)