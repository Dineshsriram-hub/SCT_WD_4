var ul = document.getElementById("listcontainer");
var input = document.getElementById("input");

function additem(){
    var listitem = document.createElement("li");
    listitem.innerHTML = input.value+"<button onclick='dltitem(event)'>delete</button>";
    ul.appendChild(listitem);
    input.value = "";
}

function dltitem(event){
    event.target.parentElement.remove();
}

ul.addEventListener("click", function(event){
    if(event.target.tagName === "LI"){
        event.target.classList.toggle("checked");
    }
});