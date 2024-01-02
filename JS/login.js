//LOG IN
// &-----------------HTML ELEMENTS --------------
var logInEmail = document.getElementById("email");
var logInPassword = document.getElementById("password");
var loginBtn = document.getElementById("loginBtn");
var required = document.getElementById("required");
var incorrect = document.getElementById("incorrect");
// &-----------------GLOBAL VARIABLES --------------
var newArr = [];
newArr = JSON.parse(localStorage.getItem("accountArray"));
// &-----------------EVENTS-------------------
loginBtn.addEventListener("click", function () {
  if (logInEmail.value !== "" && logInPassword.value !== "") {
    for (var i = 0; i < newArr.length; i++) {
      if (
        newArr[i].signUPEmail == logInEmail.value &&
        newArr[i].signUPPassword == logInPassword.value
      ) {
        var nameEntered = newArr[i].signUPName;
        localStorage.setItem("nameEntered", nameEntered);
        location.href = "/welcome.html";
        incorrect.classList.replace("d-block", "d-none");
      }else{
        incorrect.classList.replace("d-none", "d-block");
      }
    }
   
  } else {
    required.classList.replace("d-none", "d-block");
  }
});
