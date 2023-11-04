// Array of special characters to be included in password
var specialCharacters = [
  "@",
  "%",
  "+",
  "\\",
  "/",
  "'",
  "!",
  "#",
  "$",
  "^",
  "?",
  ":",
  ",",
  ")",
  "(",
  "}",
  "{",
  "]",
  "[",
  "~",
  "-",
  "_",
  ".",
];

// Array of numeric characters to be included in password
var numericCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

// Function to prompt user for password options

function getPasswordOptions() {
  
// start with empty array
// use the prompt function to ask the user
// ask for length  and different character classes
//  use if statements to evaluate if user has met criteria e.g input number is between 8 and 128
// - user "Number" to convert a string into a number OR pareseInt OR +userLength
// store what user says on confirm/alerts
// use confirm statements
// if confirm returns true, push info about the character into the array
  var passwordOptions = [];
 
  while (true) {
    userLength = prompt("Choose password length between 8-128 characters.");
    if (userLength >= 8 && userLength <= 128) {
      userLength = parseInt(userLength);
      break;
    } else {
      alert("You must choose a length between 8-128 characters");
    }
  }

  var lowercase = confirm("Include lowercase characters?");

  if (lowercase) {
    passwordOptions = passwordOptions.concat(lowerCasedCharacters);
  }

  var uppercase = confirm("Include uppercase characters?");

  if (uppercase) {
     passwordOptions = passwordOptions.concat(upperCasedCharacters);
  }

  var numeric = confirm("Include numeric data?");

  if (numeric) {
    passwordOptions = passwordOptions.concat(numericCharacters);
  }

  var special = confirm("Include special characters?");

  if (special) {
    passwordOptions = passwordOptions.concat(specialCharacters);
  }
  return [passwordOptions, userLength];
}

// connect all arrays that user said that want to use
  // use conditionals to choose which arrays to concatenate
  // e.g. special charactesr/lowercase
  // put those arrays together << done in first function

// Function to generate password with user input
function generatePassword() {
// runs getPasswordOptions function
// need to loop => the number of times of user length of passwrod
// this function must RETURN the generated password as a string
// get random one
// user input length - generate number of random elements from array
  var newPassword = ""
  var options = getPasswordOptions();

  for (var i = 0; i < options[1]; i++) {
    var randomCharacter = options[0][Math.floor(Math.random() * options[0].length)];
    newPassword += randomCharacter;
    console.log(randomCharacter)
  }
  return newPassword;
}

  
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
