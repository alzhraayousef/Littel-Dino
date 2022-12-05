
try
{
document.body.addEventListener("mousemove", function (e) {

    var curX = e.clientX;
    var curY = e.clientY;

    document.querySelector('.mouse').style.left = curX + 'px';
    document.querySelector('.mouse').style.top = curY + 'px';

});

}
catch(mes){

}

// nav bar
var navDiv = document.createElement("div");

var logo = document.createElement("span");
logo.innerHTML = "<a href='home.html'><img src='homeImages/logo.png' width='150px' height='65px'></a>";
navDiv.appendChild(logo);
logo.style = `position:relative; top:-18px; left:100px; cursor:pointer`;



var navList = document.createElement("ul");
navList.setAttribute("id","navList"); 

var navElement = document.createElement("li");
var navElementLink = document.createElement("a");
var navElementContent = document.createTextNode("Home");
navElementLink.setAttribute("href","../home.html");
navElementLink.appendChild(navElementContent);
navElement.appendChild(navElementLink);
navList.appendChild(navElement);

navElement = document.createElement("li");
navElementLink = document.createElement("a");
navElementContent = document.createTextNode("Learning");
navElementLink.setAttribute("href","../LearningPage/home.html");
navElementLink.appendChild(navElementContent);
navElement.appendChild(navElementLink);
navList.appendChild(navElement);

navElement = document.createElement("li");
navElementLink = document.createElement("a");
navElementContent = document.createTextNode("Gaming");
navElementLink.setAttribute("href","gamesPage.html");
navElementLink.appendChild(navElementContent);
navElement.appendChild(navElementLink);
navList.appendChild(navElement);

navElement = document.createElement("li");
navElementLink = document.createElement("a");
navElementContent = document.createTextNode("Story");
navElementLink.setAttribute("href","../story/stories.html");
navElementLink.appendChild(navElementContent);
navElement.appendChild(navElementLink);
navList.appendChild(navElement);

navElement = document.createElement("li");
navElementLink = document.createElement("a");
navElementContent = document.createTextNode("Contact");
navElementLink.setAttribute("href","../contact/contact.html");
navElementLink.appendChild(navElementContent);
navElement.appendChild(navElementLink);navList.appendChild(navElement);


navDiv.appendChild(navList);
document.body.appendChild(navDiv);


// put style and events
navDiv.style = `position:fixed; top:-16px; left:0px;
                background-color:white; box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
                ;width:100%; height:60px; 
                padding-top:40px ; z-index:1;`;

navList.style = `position:relative; top:-75px; left:450px; `;

var offsetL, offsetW;
var navElements = document.querySelectorAll("li");
for (var index = 0; index < navElements.length; index++) {
    navElements[index].style = `display:inline; margin-right:80px; font-size:15px; color:rgb(14, 14, 100);
                               font-family: Verdana, Geneva, Tahoma, sans-serif; font-weight: bold; cursor:pointer`;
    navElements[index].addEventListener("mouseover", function (e) {
            indicator(e.target);
    });

    navElements[index].addEventListener("click", function (e) {
            offsetL = e.target.offsetLeft;
            offsetW = e.target.offsetWidth;
            indicator(e.target);
            
    });
}

navList.addEventListener("mouseleave", function () {
    saveIndicatorOnActive(offsetL - 10, offsetW + 18);
});


// marker on li in mouseover case
var marker = document.createElement("div");

marker.style = `left: 0; position: absolute; height: 40px; width: 0;
               background:pink; bottom: -10px; z-index:-1;
               border-radius: 4px; transition: 0.3s;`;

navList.appendChild(marker);


function indicator(e) {
    marker.style.left = e.offsetLeft - 10 + "px";
    marker.style.width = e.offsetWidth + 18 + "px";
}

function saveIndicatorOnActive(L, W) {
    marker.style.left = L + "px";
    marker.style.width = W + "px";
}






