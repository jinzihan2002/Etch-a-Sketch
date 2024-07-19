let gridLength;
let isDragging = false;
let setColor = "gray";

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

            square.addEventListener("mousedown", (e) => {
                changeColor(e.target);
            });
            square.addEventListener("mouseover", (e) => {
                if (isDragging) {
                    changeColor(e.target);
                }
            });

            row.appendChild(square);
        }
        container.appendChild(row);
    }
}

function randomColors() {
    return "#" + Math.floor(Math.random() * 16777215).toString(16);
}

function changeColor(element) {
    if (!element.classList.contains("colored")) {
        if (setColor === "gray") {
            element.style.backgroundColor = "#808080";
        } else if (setColor === "random") {
            element.style.backgroundColor = randomColors();
        } else {
            return;
        }
        element.setAttribute("class", "square colored");
    } else if (setColor === "erase") {
        removeColor(element);
    }
}

function removeColor(element) {
    element.removeAttribute("style");
    element.setAttribute("class", "square");
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
    squares.forEach(square => removeColor(square));
});

const btnResize = document.querySelector("#resize");
btnResize.addEventListener("click", () => {
    loadGrid();
});

lengthInput.addEventListener("input", (e) => {
    gridLength = e.target.value;
    lengthOutput.textContent = gridLength;
});

const radioButtons = document.querySelector("#color-field");
radioButtons.addEventListener("click", (e) => {
    if (e.target.type === "radio") {
        setColor = e.target.value;
    }
});
