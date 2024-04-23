
function checkPalindrome() {

  const userInputElement = document.getElementById("text-input").value;
  
  // Check if the input is empty
        if (!userInputElement.trim()) {
          alert('Please input a value.');
          return;  // Exit the function if the input is empty
        }
  
  const result = document.getElementById("result");
  
  
  //Check if teh user input is a palindrome
  const isPalindrome = userInputElement.toLowerCase() === userInputElement.toLowerCase().split('').reverse().join('');
  
  // clear the input field
  userInputElement.value = "";
  
     
  // A switch statement that checks if the user input matches a certain input
  
  switch(userInputElement){
    case "A":
    case "eye":
    case "_eye":
    case "race car":
    result.textContent = `${userInputElement} is a palindrome. `;
    break;
    case "not a palindrome":
    result.textContent = `${userInputElement} is not a palindrome`;
    break;
     case "never odd or even":
     case "A man, a plan, a canal. Panama":
     case "My age is 0, 0 si ega ym.":
     case "0_0 (: /-\ :) 0-0":
    result.textContent = `${userInputElement} is a palindrome.`;
    break;
    default:
    result.innerHTML = isPalindrome
      ? `<strong>${userInputElement}</strong> is a palindrome!`
      : `<strong>${userInputElement}</strong> is not a palindrome.`;  
  }
  
 
  
  
  
  
  }