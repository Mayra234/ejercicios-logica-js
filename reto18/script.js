function listPrices() {
  let prices = [700, 200, 1500, 8500, 750];
  return prices.sort((a, b) => a - b);
}
console.log(listPrices());
