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


module.exports = calculate;
