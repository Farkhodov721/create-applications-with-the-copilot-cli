const { addition, subtraction, multiplication, division } = require("../calculator");

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
