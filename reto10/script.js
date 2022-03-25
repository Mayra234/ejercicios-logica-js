function calculateHypotenuse(side1, side2) {
  if (side1 <= 0 || side2 <= 0) {
    throw "El lado del triángulo no puede ser menor o igual a 0";
  }
  return Math.pow(side1, 2) + Math.pow(side2, 2);
}

console.log(calculateHypotenuse(5, 1));
