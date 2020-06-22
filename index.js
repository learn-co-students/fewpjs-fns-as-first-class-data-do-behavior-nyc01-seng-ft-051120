/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
/* Write your implementation of displayMessage() */





function greet(string) {
  //HH:MM
  const hours_time = string.split(":")
  const hours = parseInt(hours_time[0], 10)   
  if ( hours < 12 ) {
    return 'Good Morning'

    }
  else if ( hours > 17 ) {
    return 'Good Evening'
  }
  else {
    return 'Good Afternoon'
    }
}

function displayMessage(string) {
  const base = document.getElementById('greeting');
  base.innerText = string 
}
