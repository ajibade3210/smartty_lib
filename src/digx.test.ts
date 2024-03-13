import { dig } from "./index";

test("works with a shallow object", () => {
  expect(dig({ param: 1 }, "param")).toBe(1);
});

test("works with a shallow array", () => {
  expect(dig([1, 2, 3], "[2]")).toBe(3);
});

test("works with a shallow array when shouldThrow is true", () => {
  expect(dig([1, 2, 3], "[2]", true)).toBe(3);
});

test("works with a nested object", () => {
  const source = { param: [{}, { test: "A" }] };
  expect(dig(source, "param[1].test")).toBe("A");
});

test("returns undefined when source is null", () => {
  expect(dig(null, "param[1].test")).toBeUndefined();
});

test("returns undefined when path is wrong", () => {
  expect(dig({ param: [] }, "param[1].test")).toBeUndefined();
});

test("throws an exception when path is wrong and shouldThrow is true", () => {
  expect(() => dig({ param: [] }, "param[1].test", true)).toThrow();
});

test("works tranparently with Sets and Maps", () => {
  const source = new Map([
    ["param", new Set()],
    ["innerSet", new Set([new Map(), new Map([["innerKey", "value"]])])],
  ]);
  expect(dig(source, "innerSet[1].innerKey")).toBe("value");
});
