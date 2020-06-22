/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

function greet(string){
  let time_split = string.split(' ')
  let time_number = parseInt(time_split[0])

  if (time_number < 12)
    return "Good Morning"
  else if (time_number < 17)
    return "Good Afternoon"
  else
   return "Good Evening"
}

function displayMessage(string) {
  let element = document.getElementById('greeting')
  element.innerText = string 
}
/* Write your implementation of greet() */
/* Write your implementation of displayMessage() */
