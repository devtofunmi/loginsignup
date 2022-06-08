const logIn = document.getElementById("login");
const signUp = document.getElementById("signup");
const btn = document.getElementById("btn");

function signup() {
    logIn.style.left = '-400px';
    signUp.style.left = '50px';
    btn.style.left = '110px';
}
function login() {
    logIn.style.left = '50px';
    signUp.style.left = '450px';
    btn.style.left = '0px';
}