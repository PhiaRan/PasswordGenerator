
var NumberOptions = "0123456789";
var UpperOptions = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var LowerOptions = "abcdefghijklmnopqrstuvwxyz";
var CharOptions = "@%+/ '!#$^?:,)(}{][~-_.";
var Usernumber = "";


// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


function generatePassword(){

var finalpassword = ""
  var passwordLength = prompt("How many characters would you like your password? Choose between 8 and 128");
  var Character = confirm("Will this contain special characters?");
  var UpperCase = confirm("Will this contain Uppercase letters?");
  var LowerCase = confirm("Will this contain Lowercase letters?");
  var Numbers = confirm("Will this contain numbers?");


  if (passwordLength <8 || passwordLength > 128) {

    alert("Must be between 8 and 128. Try again!")
    var passwordLength = prompt("Must be between 8 and 128 characters!")

  }

  else if (LowerCase === false && Numbers == false && Uppercase == false && Character === false) {
alert("Please choose one for a secure password!");

var Character = confirm("Will this contain special characters?");
var UpperCase = confirm("Will this contain Uppercase letters?");
var LowerCase = confirm("Will this contain Lowercase letters?");
var Numbers = confirm("Will this contain numbers?");

  }

    
    if (LowerCase) {
      Usernumber  += LowerOptions;
  }

  if (UpperCase) {
    Usernumber  += UpperOptions;
  }

  if (Numbers) {
    Usernumber += NumberOptions;
  }

  if (Character) {
      Usernumber += CharOptions;
  }


  for (var i = 0; i < passwordLength; i++) {
    
      finalpassword += Usernumber.charAt(Math.floor(Math.random() * Usernumber.length));
  }

return finalpassword  

   
}

generateBtn.addEventListener("click", writePassword);