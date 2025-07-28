let isDeg = true;

function append(value) {
  const display = document.getElementById("display");
  display.value += value;
}

function clearDisplay() {
  document.getElementById("display").value = "";
}

function backspace() {
  const display = document.getElementById("display");
  display.value = display.value.slice(0, -1);
}

function toggleMode() {
  isDeg = !isDeg;
  document.getElementById("modeLabel").textContent = isDeg ? "DEG" : "RAD";
}

function appendTrig(func) {
  const display = document.getElementById("display");
  let wrapper = isDeg
    ? `Math.${func}(toRad(`
    : `Math.${func}(`;
  display.value += wrapper;
}

function toRad(deg) {
  return deg * (Math.PI / 180);
}

function factorial(n) {
  if (n < 0) return NaN;
  if (n === 0 || n === 1) return 1;
  return n * factorial(n - 1);
}

function calculateResult() {
  const display = document.getElementById("display");
  let expression = display.value;

  try {
    // Replace factorial symbol
    expression = expression.replace(/(\d+)!/g, (_, n) => `factorial(${n})`);
    // Evaluate the expression
    const result = eval(expression);
    display.value = result;
  } catch (e) {
    display.value = "Error";
  }
}
