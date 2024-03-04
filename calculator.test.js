const calculator = require("./calculator");

test("Die Summe von 2 + 5 ist 7", () => {
  const result = calculator.sum(2, 5);

  expect(result).toEqual(7);
});

test('Die Summe von "Apfel" + 5 ist "Apfel5"', () => {
  const result = calculator.sum("Apfel", 5);

  expect(result).toEqual("Apfel5");
});

test("Der Quotient aus 10 durch 2 ist 5", () => {
  const result = calculator.divide(10, 2);

  expect(result).toEqual(5);
});

test("Der Quotient aus 10 durch 3 ist nahe an 3,33", () => {
  const result = calculator.divide(10, 3);

  expect(result).toBeCloseTo(3.33, 2);
});

test("Postive durch negative Zahl ist kleiner als 0", () => {
  const result = calculator.divide(10, -2);

  expect(result).toBeLessThan(0);
});

test("Negativ durch negative Zahl ist größer als 0", () => {
  const result = calculator.divide(-10, -2);

  expect(result).toBeGreaterThan(0);
});

test("Das Produkt aus 2 und 5 ist 10", () => {
  const result = calculator.multiply(2, 5);

  expect(result).toEqual(10);
});

test("Das Produkt aus -2 und 5 ist -10", () => {
  const result = calculator.multiply(-2, 5);

  expect(result).toEqual(-10);
});

test("Das Produkt aus 0 und 5 ist 0", () => {
  const result = calculator.multiply(0, 5);

  expect(result).toEqual(0);
});

test("Die Differenz von 5 und 2 ist 3", () => {
  const result = calculator.subtract(5, 2);

  expect(result).toEqual(3);
});

test("Die Differenz von 5 und -2 ist 7", () => {
  const result = calculator.subtract(5, -2);

  expect(result).toEqual(7);
});

test("Die Differenz von 5 und 0 ist 5", () => {
  const result = calculator.subtract(5, 0);

  expect(result).toEqual(5);
});
