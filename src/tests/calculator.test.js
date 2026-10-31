const {
  addition,
  subtraction,
  multiplication,
  division,
  modulo,
  power,
  squareRoot,
} = require("../calculator");

test("addition adds two numbers", () => {
  expect(addition(2, 3)).toBe(5);
});

test("subtraction subtracts two numbers", () => {
  expect(subtraction(5, 3)).toBe(2);
});

test("multiplication multiplies two numbers", () => {
  expect(multiplication(4, 3)).toBe(12);
});

test("division divides two numbers", () => {
  expect(division(10, 2)).toBe(5);
});

test("division by zero throws an error", () => {
  expect(() => division(10, 0)).toThrow("Division by zero is not allowed");
});

test("modulo returns the remainder of two numbers", () => {
  expect(modulo(10, 3)).toBe(1);
});

test("modulo by zero throws an error", () => {
  expect(() => modulo(10, 0)).toThrow("Modulo by zero is not allowed");
});

test("power raises base to the exponent", () => {
  expect(power(2, 3)).toBe(8);
});

test("square root returns the square root of a number", () => {
  expect(squareRoot(9)).toBe(3);
});

test("square root of a negative number throws an error", () => {
  expect(() => squareRoot(-9)).toThrow(
    "Square root of a negative number is not allowed"
  );
});
