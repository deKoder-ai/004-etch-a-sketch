// TOP 004 Etch-a-Sketch Project

// constants
const body = document.querySelector('body');

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
            gridSize = gridSizeF();
            console.log(gridSize);
            break;
    }
});

// create a 16x16 square of divs
