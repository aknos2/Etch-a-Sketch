"user strict"

const container = document.querySelector("#container");
const selectMaxNumber = 100;
let isMouseDown = false; 

//create title and paragraph
const title = document.createElement("h1");
title.textContent = "Etch-a-Sketch";
document.body.insertBefore(title, container);
const phrase = document.createElement("p");
phrase.textContent = `Choose grid value (current value 16x16)`;
document.body.insertBefore(phrase, container);


function select() {
    //create button select
    const select = document.createElement("select");
    select.id = "select";
    document.body.insertBefore(select, container);

    //create and append options to select element
    for (let v = 1; v <= selectMaxNumber; v++) {
        let option = document.createElement("option");
        option.value = v;
        option.text = v;
        if (v === 16) {
            option.selected = true;
        };
        select.appendChild(option);
    };

    select.addEventListener("change", event => {
        phrase.textContent = `Choose grid value (current value ${event.target.value}x${event.target.value})`
        container.innerHTML = "";
        createGrid((event.target.value) * (event.target.value));

        //set flex basis
        const squares = document.querySelectorAll(".square");
        squares.forEach(square => {
             square.style.flexBasis = `calc(100% / ${event.target.value})`

        });
    });
}

function createSquare() {
    let square = document.createElement("div");
    container.appendChild(square);
    square.classList.add("square");

    let content = document.createElement("div");
    square.appendChild(content);
    content.classList.add("content");

     //add click and drag event listener to toggle color
     square.addEventListener("mousedown", () => isMouseDown = true);
     square.addEventListener("mouseup", () => isMouseDown = false);
     square.addEventListener("mousemove", buttonClick);
     square.addEventListener("click", buttonClick);

}

function createGrid(size) {
    for (let i = 1; i <= size; i++) {
        createSquare(i);
    }
}

//initial value
function createSixteenGrid() {
    createGrid(16 * 16);
}

function buttonClick(event) {
    if (event.type === "click" || isMouseDown) {
        //generate random RGB color
        let r = Math.floor(Math.random() * 255);
        let g = Math.floor(Math.random() * 255);
        let b = Math.floor(Math.random() * 255);
        let color = `rgb(${r},${g},${b})`;
        event.currentTarget.style.backgroundColor = color;

        //square get darker after each interaction
        let currentOpacity = parseFloat(event.currentTarget.style.opacity);
        if (currentOpacity > 0) {
            event.currentTarget.style.opacity = currentOpacity - 5;
        }
    }
}

select();
createSixteenGrid();