var containerDiv=document.createElement("div")
containerDiv.setAttribute("id","containerDiv")
document.body.appendChild(containerDiv)

var optionDiv=document.createElement("div")
optionDiv.setAttribute("id","optionDiv")

var optionAdd=document.createElement("a")
optionAdd.addEventListener("click",function(){localStorage.setItem("operationSign",'+')});
optionAdd.setAttribute("href","allproccess.html")
optionAdd.setAttribute("id","optionAdd")
optionAdd.innerHTML="ADD"
//optionAdd.setAttribute("click","add.html")
optionDiv.appendChild(optionAdd)

var optionSub=document.createElement("a")
optionSub.addEventListener("click",function(){localStorage.setItem("operationSign",'-')});
optionSub.setAttribute("id","optionSub")
optionSub.innerHTML="SUBTRACT"

optionSub.setAttribute("href","allproccess.html")
//optionSub.setAttribute("click","sub.html")
optionDiv.appendChild(optionSub)

var optionMulti=document.createElement("a")
optionMulti.setAttribute("id","optionMulti")
optionMulti.innerHTML="MULTIPLY"
optionMulti.addEventListener("click",function(){localStorage.setItem("operationSign",'*')});
optionMulti.setAttribute("href","allproccess.html")
//document.getElementById("optionMulti").addEventListener("click","multi.html")
optionDiv.appendChild(optionMulti)

var optionDivid=document.createElement("a")
optionDivid.setAttribute("id","optionDivid")
optionDivid.innerHTML="DIVIDE"
optionDivid.addEventListener("click",function(){localStorage.setItem("operationSign",'/')});
optionDivid.setAttribute("href","allproccess.html")
//optionDivid.setAttribute("click","divid.html")
optionDiv.appendChild(optionDivid)


containerDiv.appendChild(optionDiv)

