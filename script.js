let expression = "";

function appendToDisplay(value) {
  expression += value;
  document.getElementById("display").value = expression;
}

function clearDisplay() {
  expression = "";
  document.getElementById("display").value = "";
}

function clearLastCharacter() {
  expression = expression.slice(0, -1);
  document.getElementById("display").value = expression;
}

function clearAll() {
  clearDisplay();
}

function calculateResult() {
  try {
    const result = eval(expression);
    expression = result.toString();
    document.getElementById("display").value = expression;
  } catch (error) {
    // Handle error (e.g., division by zero)
    expression = "";
    document.getElementById("display").value = "Error";
  }
}
