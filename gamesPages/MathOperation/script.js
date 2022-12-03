var containerDiv=document.createElement("div")
containerDiv.setAttribute("id","containerDiv")
document.body.appendChild(containerDiv)

var optionDiv=document.createElement("div")
optionDiv.setAttribute("id","optionDiv")

var optionAdd=document.createElement("a")
optionAdd.setAttribute("href","add.html")
optionAdd.setAttribute("id","optionAdd")
optionAdd.innerHTML="ADD"
//optionAdd.setAttribute("click","add.html")
optionDiv.appendChild(optionAdd)

var optionSub=document.createElement("a")
optionSub.setAttribute("id","optionSub")
optionSub.innerHTML="SUBTRACT"

optionSub.setAttribute("href","sub.html")
//optionSub.setAttribute("click","sub.html")
optionDiv.appendChild(optionSub)

var optionMulti=document.createElement("a")
optionMulti.setAttribute("id","optionMulti")
optionMulti.innerHTML="MULTIPLY"
optionMulti.setAttribute("href","multi.html")
//document.getElementById("optionMulti").addEventListener("click","multi.html")
optionDiv.appendChild(optionMulti)

var optionDivid=document.createElement("a")
optionDivid.setAttribute("id","optionDivid")
optionDivid.innerHTML="DIVIDE"
optionDivid.setAttribute("href","divid.html")
//optionDivid.setAttribute("click","divid.html")
optionDiv.appendChild(optionDivid)


containerDiv.appendChild(optionDiv)

