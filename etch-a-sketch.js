// container for the grid
const container = document.querySelector("#container");

let dracula = 0;                                                    // is a count
let gridSize = 16;                                                  // default grid size

// this function creates the structure of the 16x16 (size by default) grid
function createGrid() {
    for (let i = 0; i < gridSize; i++) {                            // create 15 columns

        for (let j = 0; j < gridSize; j++) {                        // for each column     
            const row = document.createElement("div");              // create 16 rows
            row.id = `square${dracula}`;                            // give a unique id to each square on grid
            row.classList.add("row");                               // apply some CSS
            row.style.width = `${480 / gridSize}px`;
            row.style.height = `${480 / gridSize}px`;
            container.appendChild(row);                             // place the div in the DOM
            dracula++;
        }
    }
}

// this function returns a random RGB color
function randomizeColor() {
    let r = Math.floor(Math.random() * 256);                        // random number between 0 and 255
    let g = Math.floor(Math.random() * 256);                        // random number between 0 and 255
    let b = Math.floor(Math.random() * 256);                        // random number between 0 and 255
    let randomColor = `rgb(${r}, ${g}, ${b})`;                      // convert to string
    return randomColor;
}

// this function changes the background color of each square on grid when mouseovered
function mouseOver() {
    for (k = 0; k < dracula; k++){                                  // for as many div as there is
        const square = document.querySelector(`#square${k}`);       // select each one by name (square0, square1, etc)
        square.addEventListener("mouseover", () => {                // if mouseover
            square.style.backgroundColor = randomizeColor();        // change to a random color
        })
    }
}

// this function changes the color to all the squares on grid to white
function clearGrid() {
    for (k = 0; k < dracula; k++){                                  // for as many div as there is
        const square = document.querySelector(`#square${k}`);       // select each one by name (square0, square1, etc)
        square.style.backgroundColor = "transparent";               // change it to white
    }
}

// this function allows the user to select a grid size
function changeSize() {
    gridSize = prompt("Enter a new grid size between 1 and 100:");  // ask for user input
    if (gridSize < 1 || gridSize > 100) {                           // input sanitation
        alert("Grid size must be between 1 and 100.");
    }
    else if ( isNaN(gridSize) == true){                             // input sanitation
        alert("Grid size must be a number.");
    }
    // this else statement ensures that the grid isn't removed if there is an input error
    // which would lead to a mostly blank page
    else {
        container.innerHTML = "";                                   // delete previous grid
        dracula = 0;                                                // reset the count to 0
        createGrid();
        mouseOver();
    }
}

// call the clearGrid() function when the clear button is clicked
clear.addEventListener('click', function () {
    clearGrid();
});

// call the changeSize() function when the size button is clicked
size.addEventListener('click', function () {
    changeSize();
});

createGrid();
mouseOver();
