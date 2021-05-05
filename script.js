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

  //Functions for calculating random characters
  //Using functions becuase previous method of calculating variables was only causing it to calculate once.
  //This caused the password to repeat. 

  function randLowercase() {
    return uppercase[Math.floor(Math.random() * uppercase.length)]
    //console.log(uppercaseValue)
  }

  function randUppercase() {
    return lowercase[Math.floor(Math.random() * lowercase.length)]
  }

  function randNumbers() {
    return numbers[Math.floor(Math.random() * numbers.length)]
  }

  function randSymbols() {
    return symbols[Math.floor(Math.random() * symbols.length)]
  }

    //Initialize blank password

    let pwd = "";

  // If statements to check if each of the 4 character elements are selected
  // If true, they run each of their respective random character functions and output to the tempB constant

  function generatePassword() {
    
    const tempB = [];

      if (uppercaseElement.checked === true) {
        tempB.push(randLowercase());
      }
      
      if (lowercaseElement.checked === true) {
        tempB.push(randUppercase());
      }

      if (numbersElement.checked === true) {
        tempB.push(randNumbers());
      }

      if (symbolsElement.checked === true) {
        tempB.push(randSymbols())
      }
      
      if (tempB.length === 0) {
        return "";
      }

      console.log(tempB)
        return tempB[Math.floor(Math.random() * tempB.length)];
  }

    // For loop to continually run 

  for (let i = 0; i < pickLength; i++)  {
    const tempA = generatePassword();
    pwd += tempA;
  
  }
  
    //var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = pwd;

}


//uppercaseElement.checked && tempB.push(randLowercase());
//lowercaseElement.checked && tempB.push(randUppercase());
//numbersElement.checked && tempB.push(randNumbers());
//symbolsElement.checked && tempB.push(randSymbols());




// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);