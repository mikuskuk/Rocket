
let num = document.getElementById("num");


numm = 0;

function dec() {
    num.innerHTML = numm--;
}

function inc() {
    num.innerHTML = numm = numm + 1;
}

let input = document.getElementById("input");
let todo = document.getElementById("todo");

function add() {
    let par = document.createElement("p");
    par.innerHTML = input.value;
    
    todo.appendChild(par);
}

let rocket = document.getElementById("rocket");

function up() {
    rocket.style.transition = "10s"
    rocket.style.marginTop = "-2000px"
}

function down() {
    rocket.style.marginTop = "0px"
    rocket.style.transition = "2s"
}
