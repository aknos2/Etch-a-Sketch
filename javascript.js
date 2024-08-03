"user strict"

const container = document.querySelector("#container");
const selectNumber = 100;

function button() {
    let button = document.createElement("select");
    button.id = "button";
    document.body.insertBefore(button, container);

    for( let y = 0; y <= selectNumber; y++) {
        let option = document.createElement("option");
        option.value = y;
        option.text = y;
        button.appendChild(option);
    };

    button.addEventListener("change", event => {
    
    });
}

function createSquare() {
    let square = document.createElement("div");
    container.appendChild(square);
    square.classList.add("square");

    let content = document.createElement("div");
    square.appendChild(content);
    content.classList.add("content");
}

function createSixteenGrid() {
    for (let i = 1; i < (16 * 16 + 1); i++) {
        createSquare(i);
    }
}

button()
createSixteenGrid()