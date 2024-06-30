//Calculator program

const display = document.getElementById("display");

function appendToDisplay(input) {
    display.value += input;
}
function removeLastInput() {
    const displayElement = document.getElementById('display');
    const currentValue = displayElement.value;
    displayElement.value = currentValue.substring(0, currentValue.length - 1);
  }
  


function clearDisplay() {
    display.value = "";
}

function calculate() {
    try {
    display.value = eval(display.value);
}
catch(error){
    display.value = "Error";}

}