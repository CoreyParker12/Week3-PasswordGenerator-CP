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


const uppercaseOutput = uppercase.charAt(Math.floor(Math.random() * uppercase.length))
const lowercaseOutput = lowercase.charAt(Math.floor(Math.random() * lowercase.length))
const numbersOutput = numbers.charAt(Math.floor(Math.random() * numbers.length))
const symbolsOutput = symbols.charAt(Math.floor(Math.random() * symbols.length))


// Write password to the #password input

function writePassword() {
  
  /* Reference 1. */ 
  const length = document.getElementById("lengthSelect").value

  console.log(length)

  const uppercaseValue = uppercase[Math.floor(Math.random() * uppercase.length)]
  const lowercaseValue = lowercase[Math.floor(Math.random() * lowercase.length)]
  const numbersValue = numbers[Math.floor(Math.random() * numbers.length)]
  const symbolsValue = symbols[Math.floor(Math.random() * symbols.length)]

  console.log(uppercaseValue)
  console.log(lowercaseValue)
  console.log(numbersValue)
  console.log(symbolsValue)  

}

  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;






// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);