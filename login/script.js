const logIn = document.getElementById("login");
const signUp = document.getElementById("signup");
const btn = document.getElementById("btn");

const fullname = document.querySelector(".full-name");
const username = document.querySelector(".user-name");
const password = document.querySelector(".password");
const confirmPassword = document.querySelector(".confirm-password");
const signupBtn = document.querySelector(".signbtn");
const logBtn = document.querySelector('.logbtn');

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

signupBtn.addEventListener('click', () => {
    let userDetails = {
        'fullname':fullname.value,
        'username':username.value,
        'password':password.value,
        'confirmPassword':confirm-password
    };
    fetch("https://practiceapii.herokuapp.com/signup",
    {
        method:"post",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify(userDetails)
    })
    .then(res => res.json())
    .then((data) => {
        console.log(data);
    })
    .catch((error) => {
        console.log(error)
    });
});