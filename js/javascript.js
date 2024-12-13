// TOP 004 Etch-a-Sketch Project

// constants
const body = document.querySelector('body');
const gridContainer = document.querySelector('#grid_container');

// variables
let gridSize = null;

// functions
// popup to input number of squares per side in grid
function gridSizeF(){
    let numOfSquares = Number(prompt("Squares per side:", 16));
    if (typeof numOfSquares !== 'number'){
        numOfSquares = 16;  
    }
    numOfSquares = Math.max(16, numOfSquares);
    numOfSquares = Math.min(100, numOfSquares);
    return numOfSquares;
}

// click event listener
body.addEventListener('click', (event) => {
    let target = event.target;
    switch(target.id) {
        case 'num_of_squares_btn':
            while (gridContainer.firstChild) {
                gridContainer.removeChild(gridContainer.firstChild);
            }
            gridSize = gridSizeF();
            console.log(gridSize);
            // createRowOfDivs(gridSize, 0);
            // createRowOfDivs(gridSize, 1);
            addRow(gridSize);
            break;
    }
});

function createRowOfDivs(size, rowNum) {
    const rowDiv = document.createElement('div');
    rowDiv.setAttribute('class', `row`);
    for (i = 0; i < size; i++) {
        const div = document.createElement('div');
        div.setAttribute('id', `div_${rowNum}_${i}`);
        div.setAttribute('class', `grid`);
        rowDiv.appendChild(div);
    }
    gridContainer.appendChild(rowDiv);
}

function addRow(size) {
    for (x = 0; x < size; x++) {
        createRowOfDivs(size, x);
    }
}

// changes
// - clear previous grid before generating new grid
// - write loop functions to initialise a grid of divs with unique id's