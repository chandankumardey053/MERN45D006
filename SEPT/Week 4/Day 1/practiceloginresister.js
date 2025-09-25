// Resister Page
const form=document.querySelector("#class2");
const inputs=document.querySelectorAll("input");

form.addEventListener("submit",(e)=>{
    e.preventDefault();
    const name=inputs[0].value;
    const email=inputs[1].value;
    const password=inputs[2].value;
     
    localStorage.setItem("User",JSON.stringify({name,email,password}))
    alert("Registration Successful.....!")
})



// login Page
const loginForm=document.querySelector(".login");
const loginInput=document.querySelectorAll("input");
console.log(loginInput);

loginForm.addEventListener("submit",(e)=>{
    e.preventDefault();
    const email=loginInput[3].value;
    const password=loginInput[4].value;

    const existingUser=JSON.parse(localStorage.getItem("User"));

if(existingUser.email===email){
        if(existingUser.password===password){
            alert("Login Successful..");
        }
        else{
            alert("Password Is Incorrect..");
        }
    }  
else{
        alert("Email Is Incorrect..")
    }
    
})
