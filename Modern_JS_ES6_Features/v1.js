const values = [2, 3, 4];
const result = values.map(x => x + 1).reduce((a, b) => a * b);
console.log(result);
