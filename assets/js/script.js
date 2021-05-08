// REFERENCES
// 1. https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/floor
// 2. https://www.w3schools.com/jsref/jsref_push.asp

// NOTES
// - Removed all var and replaced with const/let
// - Had to change to using functions to calculate my random variables becuase previous method of calculating variables was only calculating one and not running each loop
// - Started by using checkboxs, but since the acceptance criteria called for prompts, I re-did that portion of the work 


// Assignment Code

const generateBtn = document.querySelector("#generate");

// Creates the possible character values for each type

const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const lowercase = "abcdefghijklmnopqrstuvwxyz"
const numbers = "0123456789"
const symbols = "!@#$%^&*()_+"

// Write password to the #password input

function writePassword() {
  
  // Prompts user for number of characters

  let lengthSelect = 0;
  while (lengthSelect <= 8 || lengthSelect >= 128) {
    lengthSelect = prompt('Length? 8-128 Characters');
    if (lengthSelect >= 8 && lengthSelect <= 128) {
      break;
    } else{
      alert('Must be between 8-128 characters!');
    }
  }

  // Prompts user for uppercase

  let uppercaseElement = '';
  while (uppercaseElement !== 'Y' || uppercaseElement !== 'N') {
    uppercaseElement = prompt('Use Uppercase? Y/N?');
    if (uppercaseElement === 'Y' || uppercaseElement === 'N') {
      break;
    } else {
      alert('Must type Y or N');
    }
  }
  
  //Prompts user for lowercase

  let lowercaseElement = '';
  while (lowercaseElement !== 'Y' || lowercaseElement !== 'N') {
    lowercaseElement = prompt('Use Lowercase? Y/N?');
    if (lowercaseElement === 'Y' || lowercaseElement === 'N') {
      break;
    } else {
      alert('Must type Y or N');
    }
  }
  
  // Prompts user for numbers

  let numbersElement = '';
  while (numbersElement !== 'Y' || numbersElement !== 'N') {
    numbersElement = prompt('Use Numbers? Y/N?');
    if (numbersElement === 'Y' || numbersElement === 'N') {
      break;
    } else {
      alert('Must type Y or N');
    }
  }
  
  // Prompts user for symbols
  let symbolsElement = '';
  while (symbolsElement !== 'Y' || symbolsElement !== 'N') {
    symbolsElement = prompt('Use Symbols? Y/N?');
    if (symbolsElement === 'Y' || symbolsElement === 'N') {
      break;
    } else {
      alert('Must type Y or N');
    }
  }

  // Functions for calculating random characters
  // Math.random generates random value from 0 - 1, multiplies it by  xxxx.length, round that value down with Math.floor, and then selects the matching number from the xxxx list 
  /* Reference 1 */

  function randUppercase() {
    return uppercase[Math.floor(Math.random() * uppercase.length)]
  }

  function randLowercase() {
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
  /* Reference 2. */

  function generatePassword() {
    
    const tempB = [];

      if (uppercaseElement === 'Y') {
        tempB.push(randUppercase());
      }

      if (lowercaseElement === 'Y') {
        tempB.push(randLowercase());
      }

      if (numbersElement === 'Y') {
        tempB.push(randNumbers());
      }

      if (symbolsElement === 'Y') {
        tempB.push(randSymbols());
      }
      
      // If the length is 0, do not return a password

      if (tempB.length === 0) {
        return "";
      }

    // Now that I have a complete array of each checked option, this line picks one at random to pass to the pasword using the same logic as above

    return tempB[Math.floor(Math.random() * tempB.length)];

  }

  // For loop that runs until the selected password length is achieved

  for (let i = 0; i < lengthSelect; i++)  {
    const tempA = generatePassword();
    pwd += tempA;
  }

  // Pastes password into output box
  
  const passwordText = document.querySelector("#password");
  passwordText.value = pwd;

}

// Add event listener to generate button

generateBtn.addEventListener("click", writePassword); 