let gridLength = 100;
let isDragging = false;

const container = document.querySelector("#container");
const btnClear = document.querySelector("#clear");

function loadGrid() {
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

document.body.addEventListener("mousedown", (e) => {
    e.preventDefault();
    isDragging = true;
});

document.body.addEventListener("mouseup", () => {
    isDragging = false;
});

document.body.addEventListener("load", loadGrid());

btnClear.addEventListener("click", () => {
    const squares = document.querySelectorAll(".square.colored");
    squares.forEach(square => {
        square.setAttribute("class", "square");
    });
});
