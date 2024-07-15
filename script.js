let gridLength;
let isDragging = false;

const container = document.querySelector("#container");
const lengthInput = document.querySelector("#length-input");
const lengthOutput = document.querySelector("#length-output");

function loadGrid() {
    container.innerHTML = "";
    for (let i = 0; i < gridLength; ++i) {
        const row = document.createElement("div");
        row.setAttribute("class", "row");

        for (let j = 0; j < gridLength; ++j) {
            const square = document.createElement("div");
            square.setAttribute("class", "square");

            square.addEventListener("mousedown", () => {
                square.setAttribute("class", "square colored");
            });
            square.addEventListener("mouseover", () => {
                if (isDragging) {
                    square.className = "square colored";
                }
            });

            row.appendChild(square);
        }
        container.appendChild(row);
    }
}

window.onload = function() {
    gridLength = lengthInput.value;
    lengthOutput.textContent = gridLength;
    loadGrid();
};

document.body.addEventListener("mousedown", (e) => {
    if (e.target.type === "range") {
        return;
    }
    e.preventDefault();
    isDragging = true;
});

document.body.addEventListener("mouseup", () => {
    isDragging = false;
});

const btnClear = document.querySelector("#clear");
btnClear.addEventListener("click", () => {
    const squares = document.querySelectorAll(".square.colored");
    squares.forEach(square => {
        square.setAttribute("class", "square");
    });
});

const btnResize = document.querySelector("#resize");
btnResize.addEventListener("click", () => {
    loadGrid();
});

lengthInput.addEventListener("input", (e) => {
    gridLength = e.target.value;
    lengthOutput.textContent = gridLength;
});
