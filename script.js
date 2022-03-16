
grid = document.querySelector("#grid-container")
grid.style.gridTemplateColumns = `repeat(4, 1fr)`;
grid.style.gridTemplateRows = `repeat(4, 1fr)`;

for (i = 0; i < 17; i++) {
    let button = document.createElement("div");
    button.id = `${i+1}`;
    
    // console.log(`button ${i+1}`)
    button.classList.add("button")
    button.style.backgroundColor = "powderblue";
    grid.insertAdjacentElement("beforeend", button); 
}



const uno = document.getElementById("1")
uno.innerHTML = "1"

const due = document.getElementById("2")
due.innerHTML = "2"

const tre = document.getElementById("3")
tre.innerHTML = "3"

const quattro = document.getElementById("4")
quattro.innerHTML = "4"

const cinque = document.getElementById("5")
cinque.innerHTML = "5"

const sei = document.getElementById("6")
sei.innerHTML = "6"

const sette = document.getElementById("7")
sette.innerHTML = "7"

const otto = document.getElementById("8")
otto.innerHTML = "8"

const nove = document.getElementById("9")
nove.innerHTML = "9"

const zero = document.getElementById("10")
zero.innerHTML = "0"

const piu = document.getElementById("11")
piu.innerHTML = "+"

const meno = document.getElementById("12")
meno.innerHTML = "-"

const per = document.getElementById("13")
per.innerHTML = "*"

const diviso = document.getElementById("14")
diviso.innerHTML = "/"

const uguale = document.getElementById("15")
uguale.innerHTML = "="

const undo = document.getElementById("16")
undo.innerHTML = "undo"

const del = document.getElementById("17")
del.innerHTML = "del"



const buttons = document.querySelectorAll(".button")

let displayValue = document.querySelector("#display")
let arrayGeneral = [];
let risultato = []


buttons.forEach((button) => {
    button.addEventListener("click", function populateFirstArray() {
    contenuto = button.textContent
    
    if ((contenuto != "=" && contenuto != "undo"
    && contenuto != "del")) {
        arrayGeneral.push(contenuto)
        console.log(arrayGeneral)
        displayValue.innerHTML = arrayGeneral.join("")
    } 
    })
})

function calculateStr(fn) {
    return new Function('return ' + fn)();
}


uguale.addEventListener("click", function() {
    risultato = calculateStr(arrayGeneral.join(""))
    arrayGeneral = []
    console.log(risultato)
    displayValue.innerHTML = risultato;
    
})

undo.addEventListener("click", function() {
    arrayGeneral.pop()
    console.log(arrayGeneral)
    displayValue.innerHTML = arrayGeneral
    
})

del.addEventListener("click", function() {
    arrayGeneral = [];
    console.log(arrayGeneral)
    displayValue.innerHTML = arrayGeneral
})
