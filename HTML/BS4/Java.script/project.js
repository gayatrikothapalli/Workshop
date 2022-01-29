fetch("data.json").then(res=>res.json()).then(
  data=>
  display(data.PROFILE)
)

function display(iti){
var cdeck=document.querySelector(".card-deck")
console.log(cdeck)
var cd=document.createElement("div")
cd.classList.add("card")
console.log(cd)
cdeck.appendChild(cd)

for(var i in iti){
    var cd=document.createElement("div")
cd.classList.add("card")
console.log(cd)
cdeck.appendChild(cd)
    
//  image area
var im=document.createElement("img")
im.src=iti[i].Image;
cd.appendChild(im)
// name
var name=document.createElement("h1")
name.textContent=iti[i].Name;
cd.appendChild(name)

// branch area
var branch=document.createElement("h2")
branch.textContent=iti[i].Branch;
cd.appendChild(branch)
// year
var yr=document.createElement("h3")
yr.textContent=iti[i].Year;
cd.appendChild(yr)
// button area
var bt=document.createElement("button")
bt.classList.add("btn-info")
bt.textContent="View";
cd.appendChild(bt)
}
}