const generateButton = document.getElementById("generate");
const lowercaseButton = document.getElementById("lowercase");
const uppercaseButton = document.getElementById("uppercase");
const legthButton = document.getElementById("legth");
const symbolsButton = document.getElementById("symbols");
const numbersButton = document.getElementById("numbers");
const clipboardButton = document.getElementById("clipboard");
const passwordContainer = document.getElementById("password");

let length = 20;
legthButton.value = length;

//Seteando length
legthButton.addEventListener("change", ()=>{
    length=+legthButton.value;
});

generateButton.addEventListener("click", ()=>{
    if(length>0 && length <21){
        passwordContainer.innerText = generatePassword();        
    }

});

clipboardButton.addEventListener("click", ()=>{
    navigator.clipboard.writeText(passwordContainer.innerText);
    alert("Copied!")
});

function generateRandomUppercase(){
    return String.fromCharCode(Math.floor(Math.random()*26)+65);
}

function generateRandomLowercase(){
    return String.fromCharCode(Math.floor(Math.random()*26)+97);
}

function generateRandomNumbers(){
    return String.fromCharCode(Math.floor(Math.random()*10)+48);
}

function generateRandomSymbols(){
    const symbols = "!@#$%^&*(){}[]=<>/,.";
    return symbols[Math.floor(Math.random()*symbols.length)];
}

function generatePassword(){

    let password = '';
    const includedFunctions = [];

    if(uppercaseButton.checked){ includedFunctions.push("uppercase"); }
    if(lowercaseButton.checked){ includedFunctions.push("lowercase"); }
    if(numbersButton.checked){ includedFunctions.push("numbers"); }
    if(symbolsButton.checked){ includedFunctions.push("symbols"); }

    for(let x=0;x<length;x++){
        const choosenFuction = includedFunctions[(Math.floor(Math.random()*includedFunctions.length))];
        if(choosenFuction === "uppercase") { password += generateRandomUppercase(); }
        if(choosenFuction === "lowercase") { password += generateRandomLowercase(); }
        if(choosenFuction === "numbers") { password += generateRandomNumbers(); }
        if(choosenFuction === "symbols") { password += generateRandomSymbols(); }
    }

    return password;
}