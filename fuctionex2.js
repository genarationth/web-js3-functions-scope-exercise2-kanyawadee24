const isEven = function (num) {
  if (typeof num !== "number") return;
  num % 2 === 0 ? console.log(`${num} is even`) : 
  console.log(`${num} is odd`);
};
const isEvenOdd = (num) =>
  typeof num === "number" && num % 2 === 0
    ? console.log(`${num} is even`)
    : console.log(`${num} is odd`);

isEvenOdd(8);
isEven(3);
