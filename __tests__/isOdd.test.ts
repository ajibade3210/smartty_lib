import { isOdd } from "../src/index";

test("should return false for even numbers", () => {
  expect(isOdd(4)).toBe(false);
});

test("should return true for odd numbers", () => {
  expect(isOdd(3)).toBe(true);
});

test("should return true for non letter arguments", () => {
  expect(isOdd(-444)).toBe(false);
});
