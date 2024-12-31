let display = document.getElementById("display");

function displayNumber(input) {
    display.value += input;
}

function clearDisplay() {
    display.value = null;
}

function calculate() {
        display.value = eval(display.value);
}
