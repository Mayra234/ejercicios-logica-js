function calculateHypotenuse(lade1, lade2, h) {
  if (lade1 <= 0 || lade2 <= 0) {
    return "El lado del triángulo no puede ser menor o igual a 0";
  }
  return (h = Math.pow(lade1, 2) + Math.pow(lade2, 2));
}

console.log(calculateHypotenuse(5, 1));
