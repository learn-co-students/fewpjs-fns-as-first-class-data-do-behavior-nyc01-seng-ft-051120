/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet(timeStr) {
const time = parseInt(timeStr, 10);
let greeting;

  if (time < 12) {
   greeting = "Good Morning";
  } else if (time > 17) {
   greeting = "Good Evening"
  }
  else {
   greeting = "Good Afternoon"
  }
return greeting
}

/* Write your implementation of displayMessage() */

function displayMessage(message) {
  document.getElementById("greeting").innerText = message;
}
