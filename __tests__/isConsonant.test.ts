import { isConsonant } from "../src/index";

test("should return false for vowel letters", () => {
  expect(isConsonant("a")).toBe(false);
});

test("should return true for consonant letters", () => {
  expect(isConsonant("b")).toBe(true);
});

test("should return true for non letter arguments", () => {
  expect(isConsonant("baa")).toBe(true);
});
