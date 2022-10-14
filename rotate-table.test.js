const { getFinalTable } = require("./rotate-table.js")

test("Try 1 row 1 column matrix", () => {
  const outputResult = getFinalTable([5]);
  expect(JSON.stringify(outputResult)).toBe("[5]");
});

test("Try 2 rows 2 columns matrix", () => {
  const outputResult = getFinalTable([40, 20, 90, 10]);
  expect(JSON.stringify(outputResult)).toBe("[90,40,10,20]");
});

test("Try 3 rows 3 columns matrix", () => {
  const outputResult = getFinalTable([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  expect(JSON.stringify(outputResult)).toBe("[4,1,2,7,5,3,8,9,6]");
});

test("Try 4 rows 4 columns matrix", () => {
    const outputResult = getFinalTable([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]);
    expect(JSON.stringify(outputResult)).toBe("[5,1,2,3,9,10,6,4,13,11,7,8,14,15,16,12]");
});

test("Try 5 rows 5 columns matrix", () => {
    const outputResult = getFinalTable([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25]);
    expect(JSON.stringify(outputResult)).toBe("[6,1,2,3,4,11,12,7,8,5,16,17,13,9,10,21,18,19,14,15,22,23,24,25,20]");
});

test("Simple table", () => {
  const outputResult = getFinalTable([1, 2, 3]);
  expect(JSON.stringify(outputResult)).toBe("[]");
});

test("Empty table", () => {
  const outputResult = getFinalTable([]);
  expect(JSON.stringify(outputResult)).toBe("[]");
});

test("Rotate a matrix with a length of 10000 elements", () => {
    const tableArray = [];
    for (let i = 0; i < 10000; i++) {
        tableArray.push(i);
    }

    const outputResult = getFinalTable(tableArray);
    expect(JSON.stringify(outputResult)).not.toBe("[]");
})