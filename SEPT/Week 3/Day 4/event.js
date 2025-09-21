console.log("Today we are going to learn Event")

// const button=document.getElementById("btn");
// button.onclick=()=>{
//     document.body.style.backgroundColor="red";
// }

// button.onkeyup=()=>{
//     console.log("button clicked by keyboard")
// }

// const input=document.querySelector("input");

// input.onchange=(e)=>{
//     console.log("input field change",e.target.value)
// }

// const p =document.querySelector("p");
// p.onmousemove=()=>{
//     console.log("mouse over")
// }

// document.querySelector("form").onsubmit=(e)=>{
//     e.preventDefault();
//     console.log("form submitted")
// }

const form=document.querySelector("form");

const inputs=document.getElementsByTagName("input");

form.addEventListener("submit",(eve)=>{
    eve.preventDefault();
    let name=inputs[0].value;
    let age=inputs[1].value;
    localStorage.setItem("user",JSON.stringify({name,age}))
})

const getBtn=document.querySelector("#getItembtn");

getBtn.addEventListener("click",()=>{
    const Strdata=localStorage.getItem("use");
    const data=JSON.parse(Strdata);
    console.log(data)
    alert("login success")
})