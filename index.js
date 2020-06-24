/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
/* Write your implementation of displayMessage() */
 
function displayMessage(message){
  document.getElementById("greeting").innerText = message;

}

function greet (time){
  const timeS = parseInt(time);
  if (timeS < 12) return "Good Morning"
  else if (timeS > 17) return "Good Evening"
  else return "Good Afternoon"

 }