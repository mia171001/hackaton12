//VARIABLES
const buttonAdd = document.getElementById("button-add");
const buttonMinus = document.getElementById("button-minus");
const buttonMult = document.getElementById("button-mult");
const buttonSplit = document.getElementById("button-split");
const buttonRest = document.getElementById("button-rest");
const buttonPower = document.getElementById("button-power");
const buttonClean = document.getElementById("button-clean");
const display = document.getElementById("display");

//LISTENER
if (buttonAdd != null) {
    buttonAdd.addEventListener("click", add)
}

if (buttonMinus != null) {
    buttonMinus.addEventListener("click", minus);
}

if (buttonMult != null) {
    buttonMult.addEventListener("click", mult);
}

if (buttonSplit != null) {
    buttonSplit.addEventListener("click", split);
}

if (buttonRest != null) {
    buttonRest.addEventListener("click", rest);
}

if (buttonPower != null) {
    buttonPower.addEventListener("click", power);
}

if (buttonClean != null) {
    buttonClean.addEventListener("click", clean);
}



//FUNCIONES

function add() {

    const inputNumber1 = document.getElementById("input-number-1");
    const inputNumber2 = document.getElementById("input-number-2");

    //Manejar nulos
    if (inputNumber1 === null) return;
    if (inputNumber2 === null) return;


    const result = Number(inputNumber1.value) + Number(inputNumber2.value);

    //imprimir el resultado en display
    display.innerHTML = result;
}

function minus() {
    const inputNumber1 = document.getElementById("input-number-1");
    const inputNumber2 = document.getElementById("input-number-2");

    //Manejar nulos
    if (inputNumber1 === null) return;
    if (inputNumber2 === null) return;

    const result = Number(inputNumber1.value) - Number(inputNumber2.value);
    display.innerHTML = result;
}

function mult() {
    const inputNumber1 = document.getElementById("input-number-1");
    const inputNumber2 = document.getElementById("input-number-2");

    //Manejar nulos
    if (inputNumber1 === null) return;
    if (inputNumber2 === null) return;

    const result = Number(inputNumber1.value) * Number(inputNumber2.value);
    display.innerHTML = result;
}

function split() {
    const inputNumber1 = document.getElementById("input-number-1");
    const inputNumber2 = document.getElementById("input-number-2");

    //Manejar nulos
    if (inputNumber1 === null) return;
    if (inputNumber2 === null) return;

    const result = Number(inputNumber1.value) / Number(inputNumber2.value);
    display.innerHTML = result;
}

function rest() {
    const inputNumber1 = document.getElementById("input-number-1");
    const inputNumber2 = document.getElementById("input-number-2");

    //Manejar nulos
    if (inputNumber1 === null) return;
    if (inputNumber2 === null) return;

    const result = Number(inputNumber1.value) % Number(inputNumber2.value);
    display.innerHTML = result;
}

function power() {
    const inputNumber1 = document.getElementById("input-number-1");
    const inputNumber2 = document.getElementById("input-number-2");

    //Manejar nulos
    if (inputNumber1 === null) return;
    if (inputNumber2 === null) return;

    const result = Math.pow(Number(inputNumber1.value), Number(inputNumber2.value));
    display.innerHTML = result;
}

function clean() {
    document.getElementById("input-number-1").value = '';
    document.getElementById("input-number-2").value = '';
    document.getElementById("display").innerHTML = '';
}