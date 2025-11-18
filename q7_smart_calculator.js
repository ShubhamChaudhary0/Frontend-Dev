"use strict";

const operations = ["add", "divide", "power", "root", "subtract"]; 
const num1 = 25;
const num2 = 0;

function calculate(operation, a, b) {
  switch (operation) {
    case "add":
      return a + b;
    case "subtract":
      return a - b;
    case "divide":
      if (b === 0) {
        throw new Error("DivideByZeroError");
      }
      return a / b;
    case "power":
      return Math.pow(a, b);
    case "root":
      if (a < 0) {
        throw new Error("NegativeRootError");
      }
      return Math.sqrt(a);
    default:
      throw new Error("InvalidOperationError");
  }
}

for (let i = 0; i < operations.length; i++) {
  const op = operations[i];
  try {
    const result = calculate(op, num1, num2);
    console.log(`Operation: ${op}, num1: ${num1}, num2: ${num2}, result: ${result}`);
  } catch (error) {
    console.log(`Operation: ${op}, num1: ${num1}, num2: ${num2}, error: ${error.message}`);
  }
}

try {
  const resultUnknown = calculate("unknown", num1, num2);
  console.log("Unknown operation result:", resultUnknown);
} catch (error) {
  console.log("Unknown operation error:", error.message);
}
