// Mouse effect
document.body.addEventListener("mousemove", function (e) {

    var curX = e.clientX;
    var curY = e.clientY;

    document.querySelector('.mouse').style.left = curX + 'px';
    document.querySelector('.mouse').style.top = curY + 'px';

});


// nav bar
var navDiv = document.createElement("div");

var logo = document.createElement("span");
logo.innerHTML = "<img src='homeImages/logo.png' width='150px' height='65px'>";
navDiv.appendChild(logo);
logo.style = `position:relative; top:-18px; left:100px; `;



var navList = document.createElement("ul"); // big ul
navList.setAttribute("class", "big");

var navElement = document.createElement("li");
var navElementContent = document.createTextNode("Home");
navElement.appendChild(navElementContent);
navList.appendChild(navElement);

navElement = document.createElement("li");
navElementContent = document.createTextNode("About");
navElement.appendChild(navElementContent);
navList.appendChild(navElement);

navElement = document.createElement("li");
navElement.setAttribute("id", "SmallList1");
navElementContent = document.createTextNode("Learning +");
navElement.appendChild(navElementContent);
navList.appendChild(navElement);

navElement = document.createElement("li");
navElement.setAttribute("id", "SmallList2");
navElementContent = document.createTextNode("Gaming +");
navElement.appendChild(navElementContent);
navList.appendChild(navElement);

navElement = document.createElement("li");
navElementContent = document.createTextNode("Contact");
navElement.appendChild(navElementContent);
navList.appendChild(navElement);


navDiv.appendChild(navList);
document.body.appendChild(navDiv);


// Drop down in learning element and gaming element in navbar

var dropdown, dropdownContent, link, linkContent;

dropdown = document.querySelector("#SmallList1");
dropdown.setAttribute("class", "dropdown");

dropdownContent = document.createElement("div");
dropdownContent.setAttribute("class", "dropdown-content");
dropdown.appendChild(dropdownContent);

link = document.createElement("a");
link.setAttribute("href", "#");
linkContent = document.createTextNode("Learning1");
link.appendChild(linkContent);
dropdownContent.appendChild(link);

link = document.createElement("a");
link.setAttribute("href", "#");
linkContent = document.createTextNode("Learning2");
link.appendChild(linkContent);
dropdownContent.appendChild(link);

link = document.createElement("a");
link.setAttribute("href", "#");
linkContent = document.createTextNode("Learning3");
link.appendChild(linkContent);
dropdownContent.appendChild(link);


dropdown = document.querySelector("#SmallList2");
dropdown.setAttribute("class", "dropdown");

dropdownContent = document.createElement("div");
dropdownContent.setAttribute("class", "dropdown-content");
dropdown.appendChild(dropdownContent);

link = document.createElement("a");
link.setAttribute("href", "#");
linkContent = document.createTextNode("Gaming1");
link.appendChild(linkContent);
dropdownContent.appendChild(link);

link = document.createElement("a");
link.setAttribute("href", "#");
linkContent = document.createTextNode("Gaming2");
link.appendChild(linkContent);
dropdownContent.appendChild(link);

link = document.createElement("a");
link.setAttribute("href", "#");
linkContent = document.createTextNode("Gaming3");
link.appendChild(linkContent);
dropdownContent.appendChild(link);



// control indicator in dropdown links case
var links = document.getElementsByTagName("a");
var flag = true;
for (var i = 0; i < links.length; i++) {
    links[i].addEventListener("mouseover", function () {
        flag = false;
    });
    links[i].addEventListener("click", function () {
        flag = false;
    });
}
document.querySelector("#SmallList1").addEventListener("mouseout", function () {
    flag = true;
});
document.querySelector("#SmallList2").addEventListener("mouseout", function () {
    flag = true;
});



// put style and events
navDiv.style = `position:fixed; top:-16px; left:0px;
                background-color:yellow; width:100%; height:60px; 
                padding-top:40px ; z-index:1;`;

navList.style = `position:relative; top:-75px; left:450px; `;

var offsetL, offsetW;
var navElements = document.querySelectorAll(".big>li");
for (var index = 0; index < navElements.length; index++) {
    navElements[index].style = `display:inline; margin-right:80px; font-size:15px; color:rgb(14, 14, 100);
                               font-family: Verdana, Geneva, Tahoma, sans-serif; font-weight: bold;`;
    navElements[index].addEventListener("mouseover", function (e) {
        if (flag == true) {
            indicator(e.target);
        }
        else {
            if (e.target.textContent.indexOf("Learning") != -1) {
                indicator2();
            }
            else {
                indicator3();
            }
        }

    });

    navElements[index].addEventListener("click", function (e) {
        if (flag == true) {
            offsetL = e.target.offsetLeft;
            offsetW = e.target.offsetWidth;
            indicator(e.target);

        }
        else {
            if (e.target.textContent.indexOf("Learning") != -1) {
                indicator2();
            }
            else {
                indicator3();
            }
        }

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
// for Learning + drop down links
function indicator2() { 
    marker.style.left = 289 + "px";
    marker.style.width = 110 + "px";
}
function indicator3() {
    marker.style.left = 461 + "px";
    marker.style.width = 101 + "px";
}






