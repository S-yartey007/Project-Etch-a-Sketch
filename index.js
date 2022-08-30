let number;
const container = document.querySelector('#container');
const button = document.querySelector('.button');


function changeColor() {
    this.style.backgroundColor = 'black';
}
function revertColor() {
    this.style.backgroundColor = 'white';
}

function gridNumber() {
    let rows = [];
    while(rows.length > 0) {
        rows.pop()
    };
    console.log("prime array",rows)
     number = parseInt(prompt('enter number of grid'),10);
    for(let i = 0; i < number; i++) {
        const row = document.createElement('div');
        row.classList.add('row')
        rows.push(row)
      }

      rows.forEach( row => {
       
        for(let i = 0; i < number; i++) {
            
            const column = document.createElement('div');
            column.classList.add('column');
            column.addEventListener('mouseover', changeColor);
            column.addEventListener('mouseout',revertColor);
            row.appendChild(column);
            
        }
        container.appendChild(row);
        console.log("updated array", rows);
      
    })
}


button.addEventListener('click', gridNumber);
