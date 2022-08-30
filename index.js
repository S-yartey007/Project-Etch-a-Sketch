const container = document.querySelector('#container');
const button = document.querySelector('.button');
let number;
let divs = [];

function colorUp() {
    this.style.backgroundColor = 'white';
}
function coloroff() {
    this.style.backgroundColor = 'black';
}
function gridNumber() {
     number = parseInt(prompt('Enter the number of grids'),10);
     for(let i = 0 ; i < number; i++) {
        const div = document.createElement('div');
      divs.push(div) ;
        
    }
    divs.forEach( div => {
        div.classList.add('div');
        container.appendChild(div);
        div.addEventListener('mouseover', colorUp);
        div.addEventListener('mouseout', coloroff);
    })
   
}


button.addEventListener('click', gridNumber);
