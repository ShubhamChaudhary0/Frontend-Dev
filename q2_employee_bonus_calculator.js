"use strict";

const employees = [
  { name: "Amit", salary: "45000", years: "5" },
  { name: "Sara", salary: "38000", years: "2" },
  { name: "Kiran", salary: "52000", years: "7" }
];

function calculateBonusForEmployee(emp) {
  if (!emp || typeof emp !== "object") {
    throw new Error("InvalidEmployeeObject");
  }
  if (!("name" in emp) || !("salary" in emp) || !("years" in emp)) {
    throw new Error("MissingProperty");
  }

  const name = String(emp.name);
  const salaryNumber = Number(emp.salary);
  const yearsNumber = Number(emp.years);

  if (Number.isNaN(salaryNumber) || Number.isNaN(yearsNumber)) {
    throw new Error("ConversionError");
  }

  let bonus;
  if (yearsNumber > 3) {
    bonus = salaryNumber * 0.1;
  } else {
    bonus = salaryNumber * 0.05;
  }

  return {
    name: name,
    salary: salaryNumber,
    years: yearsNumber,
    bonus: bonus
  };
}

for (let i = 0; i < employees.length; i++) {
  try {
    const result = calculateBonusForEmployee(employees[i]);
    const message = `Employee: ${result.name}, Salary: ${result.salary}, Years: ${result.years}, Bonus: ${result.bonus}`;
    console.log(message);
  } catch (error) {
    console.log("Error processing employee at index", i, "Message:", error.message);
  }
}
