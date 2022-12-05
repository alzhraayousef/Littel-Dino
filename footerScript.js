var footer=document.createElement("div");
footer.setAttribute("id","footer");

document.getElementById("footer_container").appendChild(footer);

var dinosaur_div=document.createElement("div")
dinosaur_div.setAttribute("id","dinosaur_div")

var dinosaur_img_div=document.createElement("div")
dinosaur_img_div.setAttribute("id","dinosaur_img_div");

var dinosaur_image=document.createElement("img")
dinosaur_image.setAttribute("src","homeImages/dinosaur.png")

var Little_Dino_Center=document.createElement("p")
Little_Dino_Center.setAttribute("id","Little_Dino_Center")

dinosaur_img_div.appendChild(dinosaur_image)
Little_Dino_Center.innerHTML="Come visit The Little Dino Center for<br>  yourself so you can tour the rooms<br>  and meet some of our educators.<br> We offer high Quality early"

dinosaur_div.appendChild(dinosaur_img_div)
dinosaur_img_div.appendChild(Little_Dino_Center)
footer.appendChild(dinosaur_div)

var cat_image=document.createElement("img")
cat_image.setAttribute("src","homeImages/cat.png")
cat_image.setAttribute("id","cat_img")
dinosaur_div.appendChild(cat_image)




var iconImages=document.createElement("div")
iconImages.setAttribute("id","iconImages")

var twitter_icon=document.createElement("img")
twitter_icon.setAttribute("src","homeImages/twitter_icon.png")
twitter_icon.setAttribute("class","icons")
twitter_icon.setAttribute("onmouseover","changeIcon(this)")
twitter_icon.setAttribute("onmouseleave","returnIcon(this)")
iconImages.appendChild(twitter_icon);


var facebook_icon=document.createElement("img")
facebook_icon.setAttribute("src","homeImages/facebook_icon.png")
facebook_icon.setAttribute("class","icons")
facebook_icon.setAttribute("onmouseover","changeIcon(this)")
facebook_icon.setAttribute("onmouseleave","returnIcon(this)")
iconImages.appendChild(facebook_icon)

var pinterest_icon=document.createElement("img")
pinterest_icon.setAttribute("src","homeImages/pinterest_icon.png")
pinterest_icon.setAttribute("class","icons")
pinterest_icon.setAttribute("onmouseover","changeIcon(this)")
pinterest_icon.setAttribute("onmouseleave","returnIcon(this)")
iconImages.appendChild(pinterest_icon)

dinosaur_div.appendChild(iconImages)

var OurContacts_div=document.createElement("div")
OurContacts_div.setAttribute("id","OurContacts_div")

var head_Contacts=document.createElement("h2")
head_Contacts.setAttribute("id","head_Contacts")
head_Contacts.textContent="Our Contacts";
OurContacts_div.appendChild(head_Contacts)

var locationDiv=document.createElement("div");
locationDiv.setAttribute("id","locationDiv")
var Our_Contacts_imgs=document.createElement("div")
Our_Contacts_imgs.setAttribute("class","Our_Contacts_imgs")

var location_icon=document.createElement("img")
location_icon.setAttribute("src","homeImages/location_icon.png")
location_icon.setAttribute("class","imgs")
Our_Contacts_imgs.appendChild(location_icon)
locationDiv.appendChild(Our_Contacts_imgs)
OurContacts_div.appendChild(locationDiv)


var Our_Contacts_data=document.createElement("div")
Our_Contacts_data.setAttribute("class","Our_Contacts_data")
var Contacts_para=document.createElement("p")
Contacts_para.innerHTML="27 Division St, New York,<br> NY 10002, USA";

Our_Contacts_data.appendChild(Contacts_para)
locationDiv.appendChild(Our_Contacts_data)
OurContacts_div.appendChild(locationDiv)


float_div=document.createElement("div")
float_div.setAttribute("id","float")
OurContacts_div.appendChild(float_div)


var teleDiv=document.createElement("div");
teleDiv.setAttribute("id","teleDiv")
Our_Contacts_imgs=document.createElement("div")
Our_Contacts_imgs.setAttribute("class","Our_Contacts_imgs")
var telephone_icon=document.createElement("img")
telephone_icon.setAttribute("src","homeImages/telephone_icon.png")
telephone_icon.setAttribute("class","imgs")
Our_Contacts_imgs.appendChild(telephone_icon)
teleDiv.appendChild(Our_Contacts_imgs)
OurContacts_div.appendChild(teleDiv)

Our_Contacts_data=document.createElement("div")
Our_Contacts_data.setAttribute("class","Our_Contacts_data")
Contacts_para=document.createElement("p")
Contacts_para.innerHTML="+1 (888) 561 795 1<br> +1 (888) 561 795 2"

Our_Contacts_data.appendChild(Contacts_para)
teleDiv.appendChild(Our_Contacts_data)
OurContacts_div.appendChild(teleDiv)

float_div=document.createElement("div")
float_div.setAttribute("id","float")
OurContacts_div.appendChild(float_div)

var mailDiv=document.createElement("div");
mailDiv.setAttribute("id","mailDiv")
Our_Contacts_imgs=document.createElement("div")
Our_Contacts_imgs.setAttribute("class","Our_Contacts_imgs")
var mail_icon=document.createElement("img")
mail_icon.setAttribute("src","homeImages/mail_icon.png")
mail_icon.setAttribute("class","imgs")
Our_Contacts_imgs.appendChild(mail_icon)
mailDiv.appendChild(Our_Contacts_imgs)
OurContacts_div.appendChild(mailDiv)

Our_Contacts_data=document.createElement("div")
Our_Contacts_data.setAttribute("class","Our_Contacts_data")
Contacts_para=document.createElement("p")
Contacts_para.innerHTML="littledino@wgl.com<br>dinoino@mail.com"

Our_Contacts_data.appendChild(Contacts_para)
mailDiv.appendChild(Our_Contacts_data)
OurContacts_div.appendChild(mailDiv)

float_div=document.createElement("div")
float_div.setAttribute("id","float")
OurContacts_div.appendChild(float_div)


footer.appendChild(OurContacts_div)


var OurGallery_div=document.createElement("div")
OurGallery_div.setAttribute("id","OurGallery_div")

var headgalary=document.createElement("h2")
headgalary.setAttribute("id","headgalary")
headgalary.textContent="Our Gallery"
OurGallery_div.appendChild(headgalary)


var fristThreeImg=document.createElement("div")
fristThreeImg.setAttribute("id","fristThreeImg")


var gallery_01=document.createElement("img")
gallery_01.setAttribute("src","homeImages/gallery_01.jpg")
gallery_01.setAttribute("class","gallery_imgs")
fristThreeImg.appendChild(gallery_01)
var gallery_02=document.createElement("img")
gallery_02.setAttribute("src","homeImages/gallery_02.jpg")
gallery_02.setAttribute("class","gallery_imgs")
fristThreeImg.appendChild(gallery_02)
var gallery_03=document.createElement("img")
gallery_03.setAttribute("src","homeImages/gallery_03.jpg")
gallery_03.setAttribute("class","gallery_imgs")
fristThreeImg.appendChild(gallery_03)
OurGallery_div.appendChild(fristThreeImg)


float_div=document.createElement("div")
float_div.setAttribute("id","float")
OurGallery_div.appendChild(float_div)


var lastThreeImg=document.createElement("div")
lastThreeImg.setAttribute("id","lastThreeImg")

var gallery_04=document.createElement("img")
gallery_04.setAttribute("src","homeImages/gallery_04.jpg")
gallery_04.setAttribute("class","gallery_imgs")
lastThreeImg.appendChild(gallery_04)
var gallery_05=document.createElement("img")
gallery_05.setAttribute("src","homeImages/gallery_05.jpg")
gallery_05.setAttribute("class","gallery_imgs")
lastThreeImg.appendChild(gallery_05)
var gallery_06=document.createElement("img")
gallery_06.setAttribute("src","homeImages/gallery_06.jpg")
gallery_06.setAttribute("class","gallery_imgs")
lastThreeImg.appendChild(gallery_06)

OurGallery_div.appendChild(lastThreeImg)

footer.appendChild(OurGallery_div)

float_div=document.createElement("div")
float_div.setAttribute("id","float")
OurGallery_div.appendChild(float_div)

var Open_Hours_div=document.createElement("div")
Open_Hours_div.setAttribute("id","Open_Hours_div")
var Open_Hours=document.createElement("h2")
Open_Hours.setAttribute("id","Open_Hours")
Open_Hours.textContent="Open Hours"
Open_Hours_div.appendChild(Open_Hours)

var days_and_times=document.createElement("div")
days_and_times.setAttribute("id","days_and_times")
var open_hours_para1=document.createElement("p")
var open_hours_para2=document.createElement("p")
var open_hours_para3=document.createElement("p")
open_hours_para1.textContent="Mon - Fri ........... 8am - 7pm"
open_hours_para2.textContent="Saturday ............ 9 am - 4pm"
open_hours_para3.textContent="Sunday .................... Closed"
days_and_times.appendChild(open_hours_para1)
days_and_times.appendChild(open_hours_para2)
days_and_times.appendChild(open_hours_para3)

Open_Hours_div.appendChild(days_and_times)
footer.appendChild(Open_Hours_div)

function changeIcon(icon){
        icon.style.opacity=0.8;
}
function returnIcon(icon){
    icon.style.opacity=1;
}