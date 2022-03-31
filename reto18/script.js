function sortPricesAsc(prices) {
  return prices.sort((a, b) => a - b);
}
console.log(sortPricesAsc([700, 200, 1500, 8500, 750]));
