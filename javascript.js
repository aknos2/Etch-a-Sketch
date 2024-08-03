"user strict"

const container = document.querySelector("#container");
const selectNumber = 100;

function button() {
    //create select button
    let button = document.createElement("select");
    button.id = "button";
    document.body.insertBefore(button, container);

    //create and append options to select element
    for( let v = 1; v <= selectNumber; v++) {
        let option = document.createElement("option");
        option.value = v;
        option.text = v;
        if (v === 16) {
            option.selected = true;
        };
        button.appendChild(option);
    };

    button.addEventListener("change", event => {
        container.innerHTML = "";
        createGrid((event.target.value) * (event.target.value));

        const squares = document.querySelectorAll(".square");
        squares.forEach(square => {
             square.style.flexBasis = `calc(100% / ${event.target.value})`
        })
    });
}

function createSquare() {
    const square = document.createElement("div");
    container.appendChild(square);
    square.classList.add("square");

    const content = document.createElement("div");
    square.appendChild(content);
    content.classList.add("content");
}

function createGrid(size) {
    for(let i = 1; i <= size; i++) {
        createSquare(i);
    }
}

function createSixteenGrid() {
    createGrid(16 * 16);
}

button()
createSixteenGrid()