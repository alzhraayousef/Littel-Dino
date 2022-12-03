var audio=document.createElement("audio")
var Face={
    "path2053":{
        id:"right eye",
        soundSrc:"facePartsSounds/eye.mp3"
    },
    "path2053-0":{
        id:"Left eye",
        soundSrc:"facePartsSounds/eye.mp3"
    },
    "path2190":{
        id:"nose",
        soundSrc:"facePartsSounds/nose.mp3"
    },
    "path3506":{
        id:"mouse",
        soundSrc:"facePartsSounds/mouse.mp3"
    },
    "path65254":{
        id:"chin",
        soundSrc:"facePartsSounds/chin.mp3"
    },
    "path1097":{
        id:"right ear",
        soundSrc:"facePartsSounds/ear.mp3"
    },
    "path1097-8":{
        id:"left ear",
        soundSrc:"facePartsSounds/ear.mp3"
    },
    "path4475":{
        id:"Forhead",
        soundSrc:"facePartsSounds/hair.mp3"
    },
    "path1623":{
        id:"right ear",
        soundSrc:"facePartsSounds/ear.mp3"
    },
    "path5173":{
        id:"left ear",
        soundSrc:"facePartsSounds/ear.mp3"

    },
    "path23913":{
        id:"nose",
        soundSrc:"facePartsSounds/nose.mp3"


    },
    "path902":{
        id:"head",
        soundSrc:"facePartsSounds/head.mp3"

    }
}
function partSound(event){
    var id=event.getAttribute("id")
    audio.setAttribute("src",Face[id]["soundSrc"])
    audio.play()
    

}
function hover(event){
    var id=event.getAttribute("id")
    console.log(id)
    var title=document.createElement("title")
    document.getElementById(id).appendChild(title)  
    title.style.zIndex="2"

    document.getElementById(id).style.cursor="pointer"
    
}