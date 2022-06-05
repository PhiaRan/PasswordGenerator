// Assignment Code
var generateBtn = document.querySelector("#generate");




function generatePassword(){


    enter = parseInt(prompt("How many characters would you like your password? Choose between 8 and 128"));
    
    if (!enter) {
        alert("This needs a value");
        return 'Try Again'

    } 
    else if (enter < 8 || enter > 128) 
        enter = parseInt(prompt("You must choose between 8 and 128"));
    
        confirmCharacter = confirm("Will this contain special characters?");
        confirmUppercase = confirm("Will this contain Uppercase letters?");
        confirmLowercase = confirm("Will this contain Lowercase letters?");



        var numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
        var UpperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
        var LowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
        var character = ['@', '%', '+', '/', "'", '!', '#', '$', '^', '?', ':', ',', ')', '(', '}', '{', ']', '[', '~', '-', '_', '.'
        ];

        var password = Math.floor(Math.random()* password.length)

        

     return password ; 
     
     
}


function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
