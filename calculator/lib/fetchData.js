const [operation, ...data] = process.argv.splice(2);

const numbers = data.map((number) => Number(number));

module.exports = {
  operation,
  numbers,
};
