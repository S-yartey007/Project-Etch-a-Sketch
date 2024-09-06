//The goad is to create a sketch pad
//Create a 16 x 16 grid of square divs
  //calculate width of div so that it is 16 * 16
  //The container is 500px on either side
  //divide 500px by 16 to get the width and heigth of individald divs

//Create a div container
//Put the divs inside the container
//Make sure the divs appear as a grid
//set the hover effect on the divs
//Add a button to the top of the screen to send the user a popup asking for the number of squares per side of new grid
//Set the limit of user input to max of 100

let container = document.createElement("div")
const body = document.body;
const button = document.querySelector(".button")
body.appendChild(container)
container.classList.add("container")

function sketch(num) {
    body.removeChild(container);
    container = document.createElement("div")
    body.appendChild(container)
    console.log(container)
    container.classList.add("container")
    const containerWidth = container.offsetWidth;
    const divWidth = containerWidth/num;
    console.log(divWidth)
    
    for(let i = 1; i <= num*num; i++) {
        const div = document.createElement("div");
        div.style.width = `${divWidth}px`
        div.addEventListener("mouseover",() => {
            div.style.backgroundColor = getRandomColor()
        }
        )
        div.addEventListener("mouseout",() => {
            div.style.backgroundColor = "initial"
        })
        container.appendChild(div)
    }
}

button.addEventListener("click",() => {
   for(;;) {
    let num = Number(prompt("Enter num:"))
    if(typeof num === "number" && num < 100) {
        sketch(num)
        break;
    } else continue; 
   }
})

function getRandomColor() {
    let letters = "0123456789AF"
    let colors = "#"
    for(let i = 0; i < 6 ; i++) {
        colors += letters[Math.floor(Math.random() * 10)]
    }
    return colors;
}
console.log(getRandomColor());