const display = document.getElementById("display");

// Add value to display
function appendValue(value) {
    display.value += value;
}

// Clear display
function clearDisplay() {
    display.value = "";
}

// Delete last character
function deleteLast() {
    display.value = display.value.slice(0, -1);
}

// Calculate result
function calculate() {

    try {

        if (display.value === "") {
            return;
        }

        display.value = eval(display.value);

    } catch {

        alert("Invalid Expression");
        display.value = "";

    }

}

// Keyboard Support
document.addEventListener("keydown", function (event) {

    const key = event.key;

    // Numbers
    if (!isNaN(key)) {
        appendValue(key);
    }

    // Operators
    else if (
        key === "+" ||
        key === "-" ||
        key === "*" ||
        key === "/" ||
        key === "." ||
        key === "%"
    ) {
        appendValue(key);
    }

    // Enter = Calculate
    else if (key === "Enter") {
        event.preventDefault();
        calculate();
    }

    // Backspace = Delete
    else if (key === "Backspace") {
        deleteLast();
    }

    // Escape = Clear
    else if (key === "Escape") {
        clearDisplay();
    }

});