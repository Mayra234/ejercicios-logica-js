function division(dividend, divisor) {
  if (divisor === 0) {
    return "No es divisible por 0";
  } else {
    return dividend / divisor;
  }
}

console.log(division(15, 8));
