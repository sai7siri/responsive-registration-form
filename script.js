
const title = document.getElementById("title");
const namefield = document.getElementById("nameField");
const signin = document.getElementById("signin");
const signup = document.getElementById("signup");


signup.onclick = function () {
 title.innerText = "Sign Up";
 namefield.style.display = "flex";
}

signin.onclick = function () {
   title.innerText = "Login";
   namefield.style.display = "none";
  }