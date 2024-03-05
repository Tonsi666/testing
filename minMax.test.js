const minMax = require("./minMax");

describe("Kleinere Zahl ermitteln", () => {
  test("Die kleinere Zahl von 7 und 3 ist 3", () => {
    const result = minMax.min(7, 3);

    expect(result).toEqual(3);
  });

  test("Die kleinere Zahl von -7 und 3 ist -7", () => {
    const result = minMax.min(-7, 3);

    expect(result).toEqual(-7);
  });

  test("Die kleinere Zahl von 0 und 3 ist 0", () => {
    const result = minMax.min(0, 3);

    expect(result).toEqual(0);
  });
});

describe("Größere Zahl ermitteln", () => {
  test("Die größere Zahl von 7 und 3 ist 7", () => {
    const result = minMax.max(7, 3);

    expect(result).toEqual(7);
  });

  test("Die größere Zahl von -7 und 3 ist 3", () => {
    const result = minMax.max(-7, 3);

    expect(result).toEqual(3);
  });

  test("Die größere Zahl von 0 und 3 ist 3", () => {
    const result = minMax.max(0, 3);

    expect(result).toEqual(3);
  });
});
