const arrNum = [
[1, 2, 3],
[4, 5, 6],
[7, 8, 9],];


const factorial = n => n <= 1 ? 1 : n * factorial(n - 1);

const result = arrNum.map(inner => {
  const mid = inner[1]; // middle element
  return [factorial(mid)];
});

console.log(result); // [ [6], [120], [504] ]
