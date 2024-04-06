import { isVowel } from "../src/index";

test("should return true for vowel letters", () => {
  expect(isVowel("a")).toBe(true);
});

test("should return false for consonant letters", () => {
  expect(isVowel("b")).toBe(false);
});

test("should return false for non letter arguments", () => {
  expect(isVowel("baa")).toBe(false);
});


