let usernameInput = document.getElementById('username');
let passwordInput = document.getElementById('password');
const submitButton = document.getElementById('button');
let message = document.getElementById('msg');

const correctUsername = "Adarsh"
const correctPassword = "1234"


submitButton.addEventListener("click", () => {
    if(usernameInput.value == correctUsername && passwordInput.value == correctPassword){
        message.innerText ="Login Successful" 
    }
    else{
       message.innerText ="Invalid Credentials" 
        
    }
    
})