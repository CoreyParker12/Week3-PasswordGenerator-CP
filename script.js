// REFERENCES
// 1. https://www.w3schools.com/jsref/prop_number_value.asp
// 2. https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/floor
// 3. https://www.w3schools.com/jsref/jsref_push.asp

// NOTES
// - Removed all var and replaced with const/let
// - Had to change to using functions to calculate my random variables becuase previous method of calculating variables was only calculating one and not running each loop

// Assignment Code
const generateBtn = document.querySelector("#generate");

// Creates the possible character values for each type

const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const lowercase = "abcdefghijklmnopqrstuvwxyz'"
const numbers = "0123456789"
const symbols = "!@#$%^&*()_+"

// Pulls the id from the HTML to be read by my js file

const uppercaseElement = document.getElementById("uppercaseSelect");
const lowercaseElement = document.getElementById("lowercaseSelect");
const numbersElement = document.getElementById("numbersSelect");
const symbolsElement = document.getElementById("symbolsSelect");

// Write password to the #password input

function writePassword() {
  
  /* Reference 1. */ 
  const pickLength = document.getElementById("lengthSelect").value

  // Functions for calculating random characters
  // Math.random generates random value from 0 - 1, multiplies it by  xxxx.length, round that value down with Math.floor, and then selects the matching number from the xxxx list 
  /* Reference 3 */

  function randLowercase() {
    return uppercase[Math.floor(Math.random() * uppercase.length)]
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

    //Initialize blank password to be filled

    let pwd = "";

  // If statements to check if each of the 4 character elements are selected
  // If true, they run each of their respective random character functions above and output to the tempB constant
  /* Reference 3. */

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
      
      // If the length is 0, do not return a password

      if (tempB.length === 0) {
        return "";
      }

    // Now that I have a complete array of each checked option, this line picks one at random to pass to the pasword using the same logic as lines 38 - 52

    return tempB[Math.floor(Math.random() * tempB.length)];
  }

  // For loop that runs until the selected password length is achieved

  for (let i = 0; i < pickLength; i++)  {
    const tempA = generatePassword();
    pwd += tempA;
  }

  // Pastes password into output box
  
  const passwordText = document.querySelector("#password");
  passwordText.value = pwd;

}

// Add event listener to generate button

generateBtn.addEventListener("click", writePassword);