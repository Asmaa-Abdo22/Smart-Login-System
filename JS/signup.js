//SIGN UP
// &-----------------HTML ELEMENTS --------------
var signUPName = document.getElementById("name");
var signUPEmail = document.getElementById("email");
var signUPPassword = document.getElementById("password");
var signUpBtn = document.getElementById("signUpBtn");
var message = document.getElementById("message");
var sucess = document.getElementById("sucess");
var alertName = document.getElementById("alertName");
var alertPass = document.getElementById("alertPass");
var exist = document.getElementById("exist");
// &-------------GLOVAL VARIABLES ---------------
if (localStorage.getItem("accountArray") !== null) {
  var accountArray = JSON.parse(localStorage.getItem("accountArray"));
  console.log(accountArray);
} else {
  var accountArray = [];
}

// &-----------------FUNCTIONS-------------------
function createAccount() {
  if (
    validationSignUpName() == true &&
    validationSignUpEmail() == true &&
    validationSignUpPass() == true
  ) {
    if (emailElreadyExist() == false) {
      var account = {
        signUPName: signUPName.value,
        signUPEmail: signUPEmail.value,
        signUPPassword: signUPPassword.value,
      };
      accountArray.push(account);
      localStorage.setItem("accountArray", JSON.stringify(accountArray));
      sucess.classList.remove("d-none");
      message.classList.add("d-none");
      exist.classList.add("d-none");

     
    }
  } else {
    message.classList.replace("d-none", "d-block");
    sucess.classList.add("d-none");
   


  }
}
function emailElreadyExist() {
  for (var i = 0; i < accountArray.length; i++) {
    if (signUPEmail.value == accountArray[i].signUPEmail) {
      exist.classList.remove("d-none");
      return true;
    }
  }
  return false;
}
// &-----------------VALIDATION-------------------
// *-----------validation name--------
function validationSignUpName() {
  var text = signUPName.value;
  var regexName = /^[A-Za-z]\s?[A-Za-z0-9_]{7,29}$/;
  if (regexName.test(text) == true) {
    signUPName.classList.add("is-valid");
    signUPName.classList.remove("is-invalid");
    alertName.classList.add("d-none");
    return true;
  } else {
    signUPName.classList.add("is-invalid");
    signUPName.classList.remove("is-valid");
    alertName.classList.remove("d-none");
    return false;
  }
}
// *-----------validation email--------
function validationSignUpEmail() {
  var text = signUPEmail.value;
  var regexEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  if (regexEmail.test(text) == true) {
    signUPEmail.classList.add("is-valid");
    signUPEmail.classList.remove("is-invalid");
    return true;
  } else {
    signUPEmail.classList.add("is-invalid");
    signUPEmail.classList.remove("is-valid");
    return false;
  }
}
// *-----------validation password--------
function validationSignUpPass() {
  var text = signUPPassword.value;
  var regexPass = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
  if (regexPass.test(text) == true) {
    signUPPassword.classList.add("is-valid");
    signUPPassword.classList.remove("is-invalid");
    alertPass.classList.add("d-none");
    return true;
  } else {
    signUPPassword.classList.add("is-invalid");
    signUPPassword.classList.remove("is-valid");
    alertPass.classList.remove("d-none");
    return false;
  }
}
// &-----------------EVENTS-------------------
signUpBtn.onclick = createAccount;
signUPName.oninput = validationSignUpName;
signUPEmail.oninput = validationSignUpEmail;
signUPPassword.oninput = validationSignUpPass;
