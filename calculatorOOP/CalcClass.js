class CalcClass {
  constructor(operation, numbers) {
    this.operation = operation;
    this.numbers = numbers;
  }
  init = () => {
    return this.calculate(this.operation, this.numbers);
  };

  calculate = (operator, numbersArray) => {
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
}

const [operation, ...data] = process.argv.splice(2);

const numbers = data.map((number) => Number(number));

module.exports = new CalcClass(operation, numbers);
