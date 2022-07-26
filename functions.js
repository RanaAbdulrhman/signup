const firstNameError =  document.querySelector(".firstname-error");
const lastNameError =  document.querySelector(".lastname-error");
const emailError =  document.querySelector(".email-error");
const phoneError =  document.querySelector(".phone-error");
const passwordError =  document.querySelector(".password-error");
const confirmPasswordError =  document.querySelector(".confirm-password-error");

function makeGreen(id){
    var element = document.getElementById(id);
    element.classList.remove("red-border");
    element.classList.add("green-border");
}
function makeRed(id){
    var element = document.getElementById(id);
    element.classList.remove("green-border");
    element.classList.add("red-border");
}
function validateFirstName(){
    var firstName = document.getElementById("firstname").value;

    if (firstName.length == 0 ){
        firstNameError.innerHTML = "First name is required";
        makeRed("firstname");
        return false;
    }
    firstNameError.innerHTML = "";
    makeGreen("firstname");
    return true;
}
function validateLastName(){
    var lastName = document.getElementById("lastname").value;

    if (lastName.length == 0 ){
        lastNameError.innerHTML = "Last name is required";
        makeRed("lastname");
        return false;
    }
    lastNameError.innerHTML = "";
    makeGreen("lastname");
    return true;
}
function validateEmail(){
    var email = document.getElementById("email").value;
    var validEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    

    if (email.length == 0 ){
        emailError.innerHTML = "Email is required";
        makeRed("email");
        return false;
    }
    if (!email.match(validEmail) ){
        emailError.innerHTML = "Email format is wrong";
        makeRed("email");
        return false;
    }
    emailError.innerHTML = "";
    makeGreen("email");
    return true;
}
function validatePhone(){
    var phone = document.getElementById("phone-number").value;

    if (phone.length == 0 ){
        phoneError.innerHTML = "Phone number is required";
        makeRed("phone-number");
        return false;
    }
    if (isNaN(phone)){
        phoneError.innerHTML = "Phone number must contain digits only";
        makeRed("phone-number");
        return false;
    }
    if (phone.length !== 10 ){
        phoneError.innerHTML = "Phone number must be 10 digits";
        makeRed("phone-number");
        return false;
    }
    phoneError.innerHTML = "";
    makeGreen("phone-number");
    return true;
}

function validatePassword(){
    var password = document.getElementById("psw").value;
    var msg = "password must contain: <ul>";
    if (password.length == 0 ){
        passwordError.innerHTML = "password is required";
        makeRed("psw");
        return false;
    }
    if ( !(/[A-Z]/.test(password)) || !(/[a-z]/.test(password)) || !(/[1-9]/.test(password))){
        if (!(/[A-Z]/.test(password)) ){
            msg += "<li>a capital letter </li>";
        }
        if (!(/[a-z]/.test(password)) ){
            msg += "<li> a small letter </li>";
        }
        if (!(/[1-9]/.test(password)) ){
            msg += "<li> a number</li>";
        }
        passwordError.innerHTML = msg + "</ul>";
        makeRed("psw");
        return false;
    }
    if (password.length < 8 ){
        passwordError.innerHTML = "password must be at least 8 characters";
        makeRed("psw");
        return false;
    }
    passwordError.innerHTML = "";
    makeGreen("psw");
    return true;
}

function validateConfirmPassword(){
    var confirmPassword = document.getElementById("confirm-psw").value;
    var password = document.getElementById("psw").value;

    if (confirmPassword.length == 0 ){
        confirmPasswordError.innerHTML = "password confirmation is required";
        makeRed("confirm-psw");
        return false;
    }
    if ( !(confirmPassword === password) ){
        confirmPasswordError.innerHTML = "Input mismatch"; 
        makeRed("confirm-psw");
        return false; 
    }
    confirmPasswordError.innerHTML = "";
    makeGreen("confirm-psw");
    return true;
}



