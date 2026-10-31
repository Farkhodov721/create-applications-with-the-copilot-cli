#!/usr/bin/env node

// Node.js CLI calculator supporting basic arithmetic operations:
// addition, subtraction, multiplication, and division.

function addition(a, b) {
  return a + b;
}

function subtraction(a, b) {
  return a - b;
}

function multiplication(a, b) {
  return a * b;
}

function division(a, b) {
  if (b === 0) {
    throw new Error("Division by zero is not allowed");
  }
  return a / b;
}

function main() {
  const [operation, a, b] = process.argv.slice(2);
  const x = parseFloat(a);
  const y = parseFloat(b);

  const operations = {
    add: addition,
    subtract: subtraction,
    multiply: multiplication,
    divide: division,
  };

  if (!operations[operation]) {
    console.log("Usage: node calculator.js <add|subtract|multiply|divide> <a> <b>");
    return;
  }

  console.log(operations[operation](x, y));
}

if (require.main === module) {
  main();
}

module.exports = { addition, subtraction, multiplication, division };
