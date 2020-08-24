
var btnSignin = document.querySelector("#signin");
var btnSignup = document.querySelector("#signup");
var btnRegister = document.querySelector(".register");
var btnEnter = document.querySelector(".enter");

var body = document.querySelector("body");

btnSignin.addEventListener("click", function(){
    body.className = "sign-in-js";
});

btnSignup.addEventListener("click", function(){
    body.className = "sign-up-js";
});

btnEnter.addEventListener("click", function(){
    body.className = "sign-in-js";
});

btnRegister.addEventListener("click", function(){
    body.className = "sign-up-js";
});