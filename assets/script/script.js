// Assignment code here
var newPassword = '';
var placeHolder = '';
var lowercase = 'abcdefghijklmnopqrstuvwxyz';
var uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var numbers = '0123456789';
var specialChar = '!@#$%^&*()_-+{}[]<>;:?,.';

function generatePassword() {
  var passwordLength = parseInt(prompt('How long should the password be?(between 8 and 128 characters)'));

  if (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128){
    alert('The password needs to be between 8 and 128 characters, please try again :)')
  }
  var includeLowercase = confirm('Should I include lowercase letters?');
  var includeUppercase = confirm('Should I include uppercase letters?');
  var includeNumbers = confirm('Should I include numbers?');
  var includeSpecialChar = confirm('Should I include Special Characters?');

  if (!(includeLowercase || includeUppercase || includeNumbers || includeSpecialChar)) {
    alert("I can't make a password if you don't choose at least one option");
    return;
  }
  if (includeLowercase === true) {
    placeHolder = placeHolder.concat(lowercase)
  } 
  if (includeUppercase === true) {
    placeHolder = placeHolder.concat(uppercase)
  }
  if (includeNumbers === true) {
    placeHolder = placeHolder.concat(numbers)
  }
  if (includeSpecialChar === true) {
    placeHolder = placeHolder.concat(specialChar)
  }
  for (var i = 0; i < passwordLength; i++) {
    var random = Math.floor(Math.random() * placeHolder.length);
    newPassword += placeHolder.charAt(random);
  }
  return newPassword
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