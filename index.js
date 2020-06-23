/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
/* Write your implementation of displayMessage() */


function greet(time){

  time =  parseInt(time);
  if (time < 12) {
    return "Good Morning";
  }
  if (time < 18){
    return "Good Afternoon";
  }
  return "Good Evening";
}

function displayMessage(msg) {
  let element = document.querySelector("#greeting");
  element.innerText = msg;
}