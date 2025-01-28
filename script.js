const correctPassword = "2012";
let enteredPassword = "";

function updateDisplay() {
    const display = document.getElementById("password-display");
    display.textContent = "••••".substring(0, enteredPassword.length) + "    ".substring(enteredPassword.length);
}

function addNumber(number) {
    if (enteredPassword.length < 4) {
        enteredPassword += number;
        updateDisplay();
    }
}

function clearPassword() {
    enteredPassword = "";
    updateDisplay();
}

function submitPassword() {
    if (enteredPassword === correctPassword) {
        alert("Access Granted!");
        clearPassword();
    } else {
        alert("Incorrect Password!");
        clearPassword();
    }
}