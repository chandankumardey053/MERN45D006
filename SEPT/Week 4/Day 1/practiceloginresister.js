// Resister Page
const form=document.querySelector("form");
const inputs=document.getElementsByTagName("input");

form.addEventListener("submit",(e)=>{
    e.preventDefault();
    const name=inputs[0].value;
    const email=inputs[1].value;
    const password=inputs[2].value;
    
    localStorage.setItem("User",JSON.stringify({name,email,password}))
    alert("Registration Successful.....!")
})

const loginForm=document.getElementsByClassName("#login");
const loginInput=document.getElementById("input");


// login Page
form.addEventListener("submit",(e)=>{
    e.preventDefault();
    const email=loginInput[0].value;
    const password=loginInput[1].value;

    const existingUser=JSON.parse(localStorage.getItem("User"));
if(existingUser.email===email){
        if(existingUser.password===password){
            alert("Login Successful..");
        }
        else{
            alert("Password Is Incoreect..");
        }
    }  
    
else{
        alert("Email Is Incorrect..")
    }
    
})