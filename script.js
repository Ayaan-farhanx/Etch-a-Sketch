const container = document.querySelector("#container");
const resizeButton = document.querySelector("#resize");
const clearButton = document.querySelector("#clear");
const colorButton = document.querySelector("#color");

let gridSize = 16;
let randomMode = false;

function createGrid(size) {

    container.innerHTML = "";

    container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    for (let i = 0; i < size * size; i++) {

        const square = document.createElement("div");

        square.classList.add("square");

        square.addEventListener("mouseover", () => {

            if (randomMode) {
                square.style.backgroundColor = randomColor();
            } 
            else {
                square.style.backgroundColor = "black";
            }

        });

        container.appendChild(square);
    }
}
function randomColor() {

    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);

    return `rgb(${r}, ${g}, ${b})`;
}



resizeButton.addEventListener("click", () => {

    let newSize = prompt("Enter grid size (1-100):");

    newSize = Number(newSize);

    if (newSize >= 1 && newSize <= 100) {
        gridSize = newSize;
        createGrid(gridSize);
    }
    else {
        alert("Enter a number between 1 and 100");
    }

});

clearButton.addEventListener("click", () => {

    const squares = document.querySelectorAll(".square");

    squares.forEach(square => {
        square.style.backgroundColor = "white";
    });

});

colorButton.addEventListener("click", () => {

    randomMode = !randomMode;

    if(randomMode){
        colorButton.textContent = "Black Mode";
    }
    else {
        colorButton.textContent = "Random Color";
    }

});

createGrid(gridSize);