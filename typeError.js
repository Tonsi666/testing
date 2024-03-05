// Folgender Code wirft einen TypeError

const zahl = 1024;

try {
  zahl.map((item) => {
    console.log(item);
  });
} catch (e) {
  console.log(e);
}
