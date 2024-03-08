const { isRightSolutionForQuestion } = require("./Quiz");

//Testfall 1 Abdeckung Zeile 34
test.failing("Antwort auf Frage 1", () => {
  const result = isRightSolutionForQuestion(
    "frage_9",
    "Weil er immer kalt gelötet ist."
  );
  expect(isRightSolutionForQuestion).toThrow(ReferenceError);
});

//Testfall 2 Abdeckung Zeilen 35 & 36
test.failing("Antwort auf Frage 2", () => {
  const result = isRightSolutionForQuestion("frage_2", 5);
  expect(isRightSolutionForQuestion).toThrow(TypeError);
});

//Testfall 3 Abdeckung Zeilen 38 & 39
test("Antwort auf Frage 3", () => {
  const result = isRightSolutionForQuestion(
    "frage_3",
    "Weil er einen Virus hatte."
  );
  expect(result).toBe(true);
});

//Testfall 4 Abdeckung Zeilen 38 & 41
test("Antwort auf Frage 4", () => {
  const result = isRightSolutionForQuestion("frage_4", "Login.");
  expect(result).toBe(false);
});

//Testfall 5 Abdeckung Zeilen 38 & 39
test("Antwort auf Frage 5", () => {
  const result = isRightSolutionForQuestion(
    "frage_5",
    "Sie hatte zu viele Back-End-Probleme."
  );
  expect(result).toBe(true);
});
