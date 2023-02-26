// Assignment Code
var generateBtn = document.querySelector("#generate");
var upperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var lowerCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var numeric = ["0","1","2","3","4","5","6","7","8","9"];
  var characters = ["$","!","@","%","&","#"];



 function generatePassword () {
var password = [];

  // Prompt for password criteria as per the objective in the acceptance criteria
 alert ("Select Password Criteria !");


  // Password length between 8-128 characters

  
  var queryOne = prompt('How many characters you want in your password?');
  console.log(queryOne);
  if (queryOne < 8 || queryOne > 128 || queryOne === "") {
    alert ("You must type password between 8 and 128 characters")
    return;
  }

  
  // Character types : lowercase, uppercase, numeric, and/or special characters

  var confirmUpperCase = confirm("Do you want Upper Case characters?");
  if (confirmUpperCase) {
   password = password.concat(upperCase)
  }

  var confirmLowerCase = confirm("Do you want Lower Case characters?");
  if (confirmLowerCase) {
    password = password.concat(lowerCase)
   }
 
  var confirmNumeric = confirm("Do you want numeric characters?");
  if (confirmNumeric) {
    password = password.concat(numeric)
   }
 
  var confirmCharacters = confirm("Do you want special characters?");
  if (confirmCharacters) {
    password = password.concat(characters)
   }
   
   password = password.join("");

   var userChoice = "";
   var count = 0
   // Generating random chratacters based on the password criteria 
   if (confirmUpperCase) {
    count++
    var randomIndex = Math.floor(Math.random() * upperCase.length); 
    userChoice = userChoice + upperCase[randomIndex];
   };

   if (confirmLowerCase) {
    count++
    var randomIndex = Math.floor(Math.random() * lowerCase.length); 
    userChoice = userChoice + lowerCase[randomIndex];
   };

   if (confirmNumeric) {
    count++
    var randomIndex = Math.floor(Math.random() *  numeric.length); 
    userChoice = userChoice + numeric[randomIndex];
   };

   if (confirmCharacters) {
    count++
    var randomIndex = Math.floor(Math.random() *  characters.length); 
    userChoice = userChoice + characters[randomIndex];
   };

  // Confirmation of inputs

   for (var i=0; i < queryOne-count; i++) {
    var randomIndex = Math.floor(Math.random() * password.length); 
    userChoice = userChoice + password[randomIndex];
   }
  return userChoice;

 }

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
