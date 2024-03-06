const { isAdult } = require("./AgeFunctions");

describe("Tests for isAdult Function", () => {
  test("Test for age being 18", () => {
    expect(isAdult(18)).toBe(true);
  });

  test("Test for non-integer input", () => {
    expect(() => isAdult("Toni")).toThrow(TypeError);
  });

  test("Test for negative age", () => {
    expect(() => isAdult(-15)).toThrow(TypeError);
  });

  test("Test for age above 18", () => {
    expect(isAdult(33)).toBe(true);
  });
});
