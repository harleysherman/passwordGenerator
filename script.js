// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword () {
    // In an array
    var lowercase = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']; 
    var uppercase = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
    var numeric = [0,1,2,3,4,5,6,7,8,9];
    var special = [`'`, '!', '"', '#', '$', '%', '&','(', ')', '*','+','-','.', `/`,':',';','<','=','>','?', '@',`[`,`{`,`}`,`~`];
    var userPasswordLength; //aka password length
    var randomSpecial;
    var randomLowercase;
    var randomUppercase;
    var randomNumeric;
    var randomSpecial;
    var userPassword = [];

    // GIVEN I need a new, secure password
    // WHEN I click the button to generate a password
    //Ask the user if they would like to generate a new password
    var createPassword =  confirm("Do you want to generate a new password?");
    if (createPassword === true) {
    //if user presses okay, continue with below
    //Ask the user a prompt for the password length
    userPasswordLength = parseInt(prompt("How long would you link your password to be?"));
    console.log(userPasswordLength);
    //Check user input to make sure bigger than or equal to eight 
    //and less than 129
    if (userPasswordLength >= 8 && userPasswordLength <= 128) {
      // THEN I am presented with a series of prompts for password criteria
      // WHEN prompted for password criteria
      // THEN I select which criteria to include in the password
      //for (int i = 0; i < userPassword; i++)
      var addLowercase = confirm("Do you want to include lowercase in your password?");
      //if user presses okay randomize lowercase array
      if(addLowercase === true) {
        randomLowercase = Math.floor(Math.random()*lowercase.length);
        for (var i = 0; i < randomLowercase; i++) {
          //Combine to userPassword []
          userPassword = userPassword.concat(lowercase);
          //decrease password length by one
          //userPasswordLength--; 
        }
      } 
      var addUppercase = confirm("Include upppercase in your password?");
      if(addUppercase === true) { 
        randomUppercase = Math.floor(Math.random()*uppercase.length);
        for (var i = 0; i < randomUppercase; i++) {
          //Combine to userPassword []
          userPassword = userPassword.concat(uppercase);
          //decrease password length by one
          //userPasswordLength--; 
        }
      }
      var addNumeric = confirm("Will you include numbers in your password?");
      if(addNumeric === true) { 
        //if user presses okay randomize numeric array
        randomNumeric = Math.floor(Math.random()*numeric.length);
        for (var i = 0; i < randomNumeric; i++) {
          //Combine to userPassword []
          userPassword = userPassword.concat(numeric);
          //decrease password length by one
          //userPasswordLength--; 
        }
      } 
      //if user presses okay randomize special array
      //   var randomSpecial = Math.floor(Math.random()*special.length);
      var addSpecial = confirm("Want to include special characters in your password?");
      //if user presses okay randomize special array
      if(addSpecial === true) { 
        //if user presses okay randomize numeric array
        randomSpecial = Math.floor(Math.random()*special.length);     
        for (var i = 0; i < randomSpecial; i++) {
          //Combine to userPassword []
          userPassword = userPassword.concat(special);
          //decrease password length by one
          //userPasswordLength--; 
        }
      } 
      if(addLowercase === false && addUppercase === false && addNumeric === false && addSpecial === false) {
        alert("Please selet one character set.");       
        generatePassword();
      }
      
      var randomPassword = [];
      for (var i = 0; i < userPasswordLength; i++) {
        var randomUserPassword = randomPassword.push(userPassword[Math.floor(Math.random()*userPassword.length)]); //START HERE, THEN GO BACKWARD, 85 to 93
        userPasswordLength--; 
        //userPassword = randomPassword.join();
        // randomLowercase;
        // randomUppercase;
        // randomNumeric;
        // randomSpecial;
        //console.log(randomUserPassword);
      }
      console.log(randomPassword);
      return randomPassword.join("");
    } else {  //else ignore
      alert("This is not the proper password length. Please enter a number between 8 and 128.");
      generatePassword();
    } 
    } else {
    confirm("Thanks for your input.");
    }
}

// WHEN prompted for the length of the password
// THEN I choose a length of at least 8 characters and no more than 128 characters
// WHEN asked for character types to include in the password
// THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
//Confirm return true or false based on if we hit okay or cancel
  // Figure out 4 camps aka array
  // Need to pick at least one array, can pick up to all four - use math.random to produce radndom array stuff
// WHEN I answer each prompt
// THEN my input should be validated and at least one character type should be selected
// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria

//What series of prompts do we need to ask the user?
//Using conditionals need password length to be eigth or more but euqal to or less than 128

// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);