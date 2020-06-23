/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

function displayMessage(msg) {
  document.getElementById("greeting").innerText = msg;
}
/* Write your implementation of greet() */
function greet(time) {
  let hourString = time.split(':');
  const hour = parseInt(hourString[0], 10);
  if (hour < 0 || hour > 24){
    return 'Time Cannot be less than 0 or Greater than 24'
  } else if(hour < 12) {
    return 'Good Morning'
  } else if (hour >= 12 && hour <= 17){
    return 'Good Afternoon'
  } else {
    return 'Good Evening'
  }
}


/* Write your implementation of displayMessage() */


