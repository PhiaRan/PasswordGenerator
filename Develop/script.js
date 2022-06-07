// Assignment Code
var generateBtn = document.querySelector("#generate");


var Numbers = "0123456789";
var UpperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var LowerCase = "abcdefghijklmnopqrstuvwxyz";
var Character = "@%+/ '!#$^?:,)(}{][~-_.";
var Usernumber = "";


// Add event listener to generate button
generateBtn.addEventListener("click", generatepassword);


function generatepassword(){


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

    
    if (Lowercase) {
      Usernumber  += LowerCase;
  }

  if (Uppercase) {
    Usernumber  += UpperCase;
  }

  if (Numbers) {
    Usernumber += Numbers;
  }

  if (Character) {
      Usernumber += Character;
  }


  for (var i = 0; i < passwordLength; i++) {
    
      finalpassword += Usernumber.charAt(Math.floor(Math.random() * Usernumber.length));
  }

  password.value = finalpassword;

return finalpassword  

   
}

var password = document.querySelector("#password");