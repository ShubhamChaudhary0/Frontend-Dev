"use strict";

const transactions = [
  { id: 1, amount: 2000 },
  { id: 2, amount: -500 },
  { id: 3 },
  null
];

function validateTransaction(tx) {
  if (tx === null) {
    throw new Error("NullTransactionError");
  }
  if (typeof tx !== "object") {
    throw new Error("InvalidTypeError");
  }
  if (!("id" in tx) || !("amount" in tx)) {
    throw new Error("MissingFieldError");
  }
  if (typeof tx.amount !== "number") {
    throw new Error("NonNumericAmountError");
  }
  if (tx.amount < 0) {
    throw new Error("NegativeAmountError");
  }
  return true;
}

const validTransactions = [];
const invalidTransactions = [];

for (let i = 0; i < transactions.length; i++) {
  const current = transactions[i];
  try {
    console.log("Checking transaction index", i, "value:", current);
    const ok = validateTransaction(current);
    if (ok) {
      validTransactions.push(current);
      console.log("Result: valid");
    }
  } catch (error) {
    invalidTransactions.push({ index: i, tx: current, error: error.message });
    console.log("Result: invalid", "Error:", error.message);
  }
  console.log("---");
}

console.log("Valid transactions count:", validTransactions.length);
console.log("Invalid transactions count:", invalidTransactions.length);
console.log("Valid transactions:", validTransactions);
console.log("Invalid transactions:", invalidTransactions);
