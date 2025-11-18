"use strict";

const rawData = [
  '{"user":"Alex","age":25}',
  '{"id":2}',
  '{invalid}',
  '{"user":"Mina","age":"22"}'
];

const cleanEntries = [];
const errorLog = [];

for (let i = 0; i < rawData.length; i++) {
  const line = rawData[i];
  try {
    const parsed = JSON.parse(line);
    const hasUser = Object.prototype.hasOwnProperty.call(parsed, "user");
    const hasAge = Object.prototype.hasOwnProperty.call(parsed, "age");

    if (!hasUser || !hasAge) {
      throw new Error("MissingRequiredKey");
    }

    const ageNumber = Number(parsed.age);
    if (Number.isNaN(ageNumber)) {
      throw new Error("InvalidAgeValue");
    }

    if (ageNumber < 18) {
      console.log("Filtered out under-18 user at index", i, "user:", parsed.user, "age:", ageNumber);
      continue;
    }

    cleanEntries.push({ user: parsed.user, age: ageNumber });
    console.log("Valid entry at index", i, "user:", parsed.user, "age:", ageNumber);
  } catch (error) {
    errorLog.push({ index: i, raw: line, message: error.message });
    console.log("Error at index", i, "raw:", line, "message:", error.message);
  }
}

console.log("Clean entries:", cleanEntries);
console.log("Errors:", errorLog);
