let inputbox = document.querySelector(".input-box")
let inputs = document.querySelector("#password")
let copybtn = document.querySelector(".copy-btn")
let passwordlength = document.querySelector("#length")
let symbols = document.querySelector("#symbol")
let number = document.querySelector("#number")
let lowr = document.querySelector("#lower")
let uper = document.querySelector("#upper")
let genratorbtn = document.querySelector(".btn2")
genratorbtn.addEventListener("click",generatepassword)
copybtn.addEventListener("click",copypassword)
function generatepassword(){

let pass = ""
if(lowr.checked){
    pass+="abcdefghijklmnopqrstuvwxyz"
}

if(uper.checked){
     pass+= "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
}

if(number.checked){
    pass += "0123456789"
}

if(symbols.checked){
    pass += "@#$%!&"
}
let password = ""
for(let i = 0;i< passwordlength.value;i++){
    password+=pass[Math.floor(Math.random()*pass.length)]
}
if(passwordlength.value>=12){
    alert("maximum length are 12")
}
inputs.value = password
if(pass === ""){
    alert("Please select at least one option")
    inputs.value =""
    
}
}
function copypassword(){
    navigator.clipboard.writeText(inputs.value);
    alert("Password copied!");
    inputs.value = ""
  };
