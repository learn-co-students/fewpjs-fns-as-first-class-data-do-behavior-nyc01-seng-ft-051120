/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet(time){
  let stringTime=time.split(':')[0].concat(time.split(':')[1])
  let t=parseFloat(stringTime)
   if (t<=1200)
   return 'Good Morning'
  
   else if (t>1200 && t<=1700)
    return 'Good Afternoon'

   else return "Good Evening"
}


/* Write your implementation of displayMessage() */
function displayMessage(msg){
  let input=document.getElementById('greeting')
  input.innerText=msg;

}