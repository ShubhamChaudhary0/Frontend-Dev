"use strict";

const apiData = ["25", "true", "false", "NaN", " ", "100px", "3.14", null, undefined];

const validNumbers = [];
const invalidNumbers = [];

for (let i = 0; i < apiData.length; i++) {
  const original = apiData[i];
  const asNumber = Number(original);
  const asBoolean = Boolean(original);
  const asString = String(original);

  console.log("Index:", i);
  console.log("Original:", original, "Type:", typeof original);
  console.log("Number:", asNumber, "isNaN:", Number.isNaN(asNumber));
  console.log("Boolean:", asBoolean);
  console.log("String:", asString);

  if (typeof original === "string" && (original === "NaN" || original.trim() === "" || original.endsWith("px"))) {
    invalidNumbers.push(original);
    console.log("Classification:", "Invalid numeric source (string pattern)");
  } else if (Number.isNaN(asNumber)) {
    invalidNumbers.push(original);
    console.log("Classification:", "Invalid numeric after conversion");
  } else {
    validNumbers.push(asNumber);
    console.log("Classification:", "Valid numeric value");
  }

  console.log("---");
}

console.log("Valid numeric data:", validNumbers);
console.log("Invalid numeric data:", invalidNumbers);
