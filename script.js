// Assignment Code
var generateBtn = document.querySelector("#generate");
var upperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var lowerCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var numeric = ["0","1","2","3","4","5","6","7","8","9"];
  var characters = ["$","!","@","%","&","#"];
var userChoice = [];


 function generatePassword () {

  // Prompt for password criteria as per the objective in the acceptance criteria
 alert ("Select Password Criteria !");


  // Password length between 8-128 characters

  
  var queryOne = prompt('How many characters you want in your password?');
  console.log(queryOne);

  
  // Character types : lowercase, uppercase, numeric, and/or special characters

  var confirmUpperCase = confirm("Do you want Upper Case characters?");
  console.log(confirmUpperCase);
  var confirmLowerCase = confirm("Do you want Lower Case characters?");
  console.log(confirmLowerCase);
  var confirmNumeric = confirm("Do you want numeric characters?");
  console.log(confirmNumeric);
  var confirmCharacters = confirm("Do you want special characters?");
  console.log(confirmCharacters);


  if (confirmUpperCase === true) {
    console.log("before" + userChoice);
    userChoice = userChoice + upperCase
    console.log("after " + userChoice);
  }

    if (confirmLowerCase === true) {
      console.log("before" + userChoice);
      userChoice = userChoice + lowerCase
      console.log("after " + userChoice);
    }

  if (confirmNumeric === true) {
    console.log("before" + userChoice);
    userChoice = userChoice + numeric
    console.log("after " + userChoice);
  }

  if (confirmCharacters === true) {
    console.log("before" + userChoice);
    userChoice = userChoice + characters
    console.log("after " + userChoice);
  }
  
  // Confirmation of inputs
  var randomIndex = Math.floor(Math.random() * userChoice.length) 
console.log(userChoice[randomIndex], "This is a random character");

  // Generate password
  // Display password to the page

 }




// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
