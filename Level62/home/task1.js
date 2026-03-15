
let password = "Group 55 is best";

function checkPassword() {
  let attempts = 0;

  
  while (attempts < 3) {
    let userInput = prompt("გთხოვთ შეიყვანოთ პაროლი:");
    
    if (userInput === password) { 
      console.log("თქვენი შეყვანილი პაროლი სწორია");
      return; 
    }
    
    attempts++;
  }

  alert("თქვენ ამოგეწურათ ცდების რაოდენობა");
}

checkPassword();
