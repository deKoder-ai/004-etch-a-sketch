// TOP 004 Etch-a-Sketch Project

// constants
const body = document.querySelector('body');
const gridContainer = document.querySelector('#grid_container');
const gridSquareClass = document.querySelector('.grid_square');

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
    numOfSquares = Math.min(50, numOfSquares);
    return numOfSquares;
}

function createRowOfDivs(size, rowNum) {
    const rowDiv = document.createElement('div');
    rowDiv.setAttribute('class', `row`);
    for (i = 0; i < size; i++) {
        const div = document.createElement('div');
        div.setAttribute('id', `div_${rowNum}_${i}`);
        div.setAttribute('class', `grid_square`);
        let containerWidth = getWidthOf(gridContainer);
        let squareSize = `${Math.floor(containerWidth / gridSize)}px`;
        div.style.width = squareSize;
        div.style.height = squareSize;
        rowDiv.appendChild(div);
    }
    gridContainer.appendChild(rowDiv);
}

function createGrid(size) {
    for (x = 0; x < size; x++) {
        createRowOfDivs(size, x);
    }
}

function getWidthOf(container) {
    let width = container.clientWidth;
    return width
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

            createGrid(gridSize);
            break;
    }
});


// write a function to detect the container size and auto-size the grid divs



// changes
// - Automatically determine square size based on the width of the grid container
// - Reduced maximum to 50 as 100 seems to create lag and very small squares
// - Refactored code to remove squareSize from global variables