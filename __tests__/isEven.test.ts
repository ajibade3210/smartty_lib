import { isEven } from "../src/index";

test("should return false for odd numbers", () => {
  expect(isEven(5)).toBe(false);
});

test("should return true for even numbers", () => {
  expect(isEven(20)).toBe(true);
});

test("should return true for non letter arguments", () => {
  expect(isEven(333)).toBe(false);
});
