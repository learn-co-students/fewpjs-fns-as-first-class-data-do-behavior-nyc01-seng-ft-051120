/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
/* Write your implementation of displayMessage() */

function greet (timestring) {
  let greeting
  let array = timestring.split(":");
  let time = parseInt(array[0]);
  if (time >= 0 && time < 12) {
    greeting = "Good Morning"
  }
  else if (time >= 12 && time <= 17) {
    greeting = "Good Afternoon"
  }
  else {greeting = "Good Evening"}
  return greeting;   
}

function displayMessage (string) {
  let content = document.getElementById('greeting')
  content.innerText = string
}