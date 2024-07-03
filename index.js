
// Function that generates the password
function generatePassword(pswdlength, includeLowercase, includeUppercase, includeNumbers, includeSymbols){

    //pool of letters numbers and symbols the password will be made from
    const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
    const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numberChars = "1234567890";
    const symbolChars = "!@#$%^&*()_+-=";

      //Inittially, password is empty. Allowed characters are also empty as no checkboxes are checked
    let allowedChars = "";
    let password = "";

    if (includeLowercase) allowedChars += lowercaseChars;
    if (includeUppercase) allowedChars += uppercaseChars;
    if (includeNumbers) allowedChars += numberChars;
    if (includeSymbols) allowedChars += symbolChars;

    if(pswdlength <= 0){
        return `(Password length must be atleast 1)`;
    }

    if(allowedChars.length === 0){
        return `(At least 1 set of character needs to be selected)`;
    }

    //for loop returns each letter randomly from the options until pswdlength requirements are met
    for(let i = 0; i < pswdlength; i++){
        const randomIndex = Math.floor(Math.random()*allowedChars.length);
        password += allowedChars[randomIndex];
    }


    return password;
}
// Program is run when Website is loaded with this function:
window.addEventListener('DOMContentLoaded', (event) => {
  //each component is acquired from the html file
  let pswdlength = parseInt(document.getElementById("charLength").value);
  let upperBox = document.getElementById("upper");
  let lowerBox = document.getElementById("lower");
  let numberBox = document.getElementById("number");
  let symbolBox = document.getElementById("symbol");

  let includeLowercase = lowerBox.checked;
  let includeUppercase = upperBox.checked;
  let includeNumbers = numberBox.checked;
  let includeSymbols = symbolBox.checked;

  //eventListeners and their corresponding actions
  lowerBox.addEventListener('change', function () {
    includeLowercase = this.checked;
  });
  upperBox.addEventListener('change', function () {
    includeUppercase = this.checked;
  });
  numberBox.addEventListener('change', function () {
    includeNumbers = this.checked;
  });
  symbolBox.addEventListener('change', function () {
    includeSymbols = this.checked;
  });

  //redo button click function
  document.getElementById("redo").addEventListener("click", function () {
    pswdlength = parseInt(document.getElementById("charLength").value);
    const password = generatePassword(pswdlength, includeLowercase, includeUppercase, includeNumbers, includeSymbols);
    document.getElementById("result").value = password;
  });

  //copy button click function
  document.getElementById("copy").addEventListener("click", function () {
    const resultInput = document.getElementById("result");
    resultInput.select();
    document.execCommand("copy");
    alert("Password copied to clipboard");
  });
  // Generate a password when the page loads
  const initialPassword = generatePassword(pswdlength, includeLowercase, includeUppercase, includeNumbers, includeSymbols);
  document.getElementById("result").value = initialPassword;
});
