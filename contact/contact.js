var contactDiv = document.createElement("div");
contactDiv.style = `width:100%; height:500px;`;
document.body.appendChild(contactDiv);



var mapDiv = document.createElement("div");
mapDiv.id="map";
mapDiv.style = `posision:absolute; width:400px; height:400px; border-radius:25px; float:left;
 z-index:0.5;  margin-left:250px; top:85px `;
var map = new google.maps.Map(mapDiv, {
    center: {lat: 27.186097805163474, lng: 31.175013364418305},
    zoom: 18
  });
contactDiv.appendChild(mapDiv);

var contactForm = document.createElement("div");
contactForm.style = `posision:absolute; width:700px; padding-top:50px; height:550px;  border-radius:40px;
float:left; margin-left:-100px; ; margin-right:50px; background-color:pink;text-align: center;`;

var formTitle = document.createElement("h1");
formTitle.style=`color:rgb(14, 14, 100); width:300px ;margin-left:200px ;border-radius:24px ;background-color:white`;
formTitle.innerHTML="Get in Touch";
contactForm.appendChild(formTitle);

formTitle = document.createElement("p");
formTitle.style=`color:rgb(14, 14, 100); width:400px ;margin-left:150px;`;
formTitle.innerHTML="Have some suggestions or just want to say hi? Contact us:";
contactForm.appendChild(formTitle);


var inputInformation = document.createElement("input");
inputInformation.type="text";
inputInformation.placeholder="Enter your name:";
inputInformation.style=`color:rgb(14, 14, 100);border-radius:25px ;width:400px ;height:40px; 
margin-left:150px; display:block; margin-bottom:10px;text-indent: 10px;font-size:15px`;
contactForm.appendChild(inputInformation);

inputInformation = document.createElement("input");
inputInformation.type="email";
inputInformation.placeholder="Enter your email:";
inputInformation.style=`color:rgb(14, 14, 100);border-radius:25px; width:400px ; height:40px;
 margin-left:150px; display:block;margin-bottom:10px;text-indent: 10px; font-size:15px`;
contactForm.appendChild(inputInformation);

inputInformation = document.createElement("textarea");
inputInformation.placeholder="Message ....";
inputInformation.style=`color:rgb(14, 14, 100); border-radius:25px; height:150px;  width: 400px;
 margin-left:150px; display:block; resize:none; text-indent: 10px;font-size:15px`;
contactForm.appendChild(inputInformation);



var sendButton = document.createElement("button");
sendButton.textContent="Send";
sendButton.style=`color:rgb(14, 14, 100);border-radius:25px; width:130px ; height:50px;
 margin-left:150px; margin-top:30px ;display:block; resize:none; text-indent:6px;font-size:20px`;
contactForm.appendChild(sendButton);

contactDiv.appendChild(contactForm);



var clearDiv = document.createElement("div");
clearDiv.style = `clear:both`;
contactDiv.appendChild(clearDiv);