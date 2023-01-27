//get DOM objects textbox as 
const tbCircleRadius = document.getElementById('tbCircleRadius')
const lblResultCircleArea = document.getElementById('lblCircleArea')

// write a function that calculates the area of a circle
//calculate the circle area
const circleArea = radius => {
  return (Math.PI * radius * radius)
}

//display the circle area in the DOM
const displayArea = e => {
  const value = parseFloat(e.target.value)
  if (!isNaN(value)) {
    const result = circleArea(value)
    console.log(result)
    lblResultCircleArea.innerText = "Cicle Area: " + result
  }
  else {
    console.log('Invalid Value Entered')
    lblResultCircleArea.innerText = "Invalid Value Entered"
  }

}

// call function to display the area of a circle with radius of 10.75
tbCircleRadius.addEventListener('input', displayArea)