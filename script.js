// REFERENCES
// 1. https://www.w3schools.com/jsref/prop_number_value.asp


// Assignment Code
const generateBtn = document.querySelector("#generate");

const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const lowercase = 'abcdefghijklmnopqrstuvwxyz'
const numbers = '0123456789'
const symbols = '!@#$%^&*()_+'


const uppercaseElement = document.getElementById("uppercaseSelect");
const lowercaseElement = document.getElementById("lowercaseSelect");
const numbersElement = document.getElementById("numbersSelect");
const symbolsElement = document.getElementById("symbolsSelect");
const passwordElement = document.getElementById("#generate");

// Write password to the #password input

function writePassword() {
  
  /* Reference 1. */ 
  const pickLength = +document.getElementById("lengthSelect").value

//Going to remove the below method of finding random values

  const uppercaseValue = uppercase[Math.floor(Math.random() * uppercase.length)]
  const lowercaseValue = lowercase[Math.floor(Math.random() * lowercase.length)]
  const numbersValue = numbers[Math.floor(Math.random() * numbers.length)]
  const symbolsValue = symbols[Math.floor(Math.random() * symbols.length)]


    const len = pickLength;
    let pwd = "";

    for (let i = 0; i < len; i++)  {
      const tempA = generateTemp();
      pwd += tempA;

    }

  function generateTemp() {
    const tempB = [];
    uppercaseElement.checked && tempB.push(uppercaseValue);
    lowercaseElement.checked && tempB.push(lowercaseValue);
    numbersElement.checked && tempB.push(numbersValue);
    symbolsElement.checked && tempB.push(symbolsValue);

    if (tempB.length === 0) {
      return "";
    }

    const testing = tempB[Math.floor(Math.random() * tempB.length)];
    console.log(testing)
  }
  
    //var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = pwd;

}







// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);