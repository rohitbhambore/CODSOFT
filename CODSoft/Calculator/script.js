
const display = document.getElementById("display");


let currentInput = "";
let result = "";


function updateDisplay() {
    display.value = currentInput;
}

const buttons = document.querySelectorAll(".buttons button");
buttons.forEach((button) => {
    button.addEventListener("click", () => {
        const buttonText = button.textContent;
        
        if (buttonText === "=") {
            try {
                result = eval(currentInput);
                currentInput = result;
            } catch (error) {
                currentInput = "Error";
            }
        } else if (buttonText === "C") {
            currentInput = "";
            result = "";
        } else {
            currentInput += buttonText;
        }
        
        updateDisplay();
    });
});
