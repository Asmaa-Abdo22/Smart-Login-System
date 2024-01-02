//WELCOME PAGE
var wlcome = document.getElementById("wlcome");
var storedName = localStorage.getItem("nameEntered");
wlcome.innerHTML +=  "  " +storedName;
var logBtn= document.getElementById("logBtn")
logBtn.addEventListener("click",function(){
    localStorage.removeItem("nameEntered")
})