
let resultInput = document.getElementById("result");


function appendValue(c) {

    if (resultInput.value === "0" || resultInput.value === "Error") {
        resultInput.value = c;
    } else {
        resultInput.value += c;
    }
}

function clearScreen() {
    resultInput.value = "0";
}

function deleteLast() {
    if (resultInput.value.length > 1) {
        resultInput.value = resultInput.value.slice(0, -1);
    } else {
        resultInput.value = "0";
    }
}

function calculate() {
    try {

        let expression = resultInput.value.replace(/×/g, '*').replace(/÷/g, '/');

        let result = eval(expression);

        resultInput.value = result;
    } catch (error) {
        resultInput.value = "Error";
    }
}