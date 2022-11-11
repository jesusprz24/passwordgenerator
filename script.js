// Assignment code
var generateBtn = document.querySelector("#generate"); 
// Write password to the #password input
//Added chars for all characters
//Set password length to 8
function genPassword() {
  var chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var passwordLength = 8;
  var password = "";

for (var i = 0; i <= passwordLength; i++) {
 var randomNumber = Math.floor(Math.random() * chars.length);
  password += chars.substring(randomNumber, randomNumber +1); 
}
  document.getElementById("password").value = password;
}

// Add event listener to generate button
//Replaced writePassword to genPassword to better be understood
generateBtn.addEventListener("click", genPassword);
