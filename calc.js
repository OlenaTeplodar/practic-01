//node calc.js sum 3 5 7
//node calc.js sub 9 3 3
//node calc.js mult 3 5 7
//node calc.js div 12 2 2

// console.log(process.argv.splice(2))

// const [operation, ...data] = process.argv.splice(2);
// console.log(operation)
// console.log(data)

// const numbers = data.map(number => Number(number))
// console.log(numbers)

// if (operation === 'sum') {
//     const result = numbers.reduce((acc, num) => acc + num, 0)
//     console.log(result)
// }
// if (operation === "sub") {
//   const result = numbers.reduce((acc, num) => acc - num);
//   console.log(result);
// }

// if (operation === "mult") {
//   const result = numbers.reduce((acc, num) => acc * num);
//   console.log(result);
// }

// if (operation === "div") {
//   const result = numbers.reduce((acc, num) => acc / num);
//   console.log(result);
// }

//----- refactoring

const [operation, ...data] = process.argv.splice(2);

const numbers = data.map((number) => Number(number));

const calculate = (operator, numbersArray) => {
  if (operator === "sum") {
    return numbersArray.reduce((acc, num) => acc + num, 0);
  }
  if (operator === "sub") {
    return numbersArray.reduce((acc, num) => acc - num);
  }

  if (operator === "mult") {
    return numbersArray.reduce((acc, num) => acc * num);
  }

  if (operator === "div") {
    return numbersArray.reduce((acc, num) => acc / num);
  }
  return "Unknown operation type!";
};

console.log(calculate(operation, numbers));
