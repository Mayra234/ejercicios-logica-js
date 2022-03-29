function calculateAreaRectangle(base, height) {
  if (base <= height) {
    console.log(
      "La base debe ser mayor que la altura para calcular el área del rectángulo"
    );
  } else {
    const result = base * height;
    console.log(result);
  }
}
calculateAreaRectangle(9, 8);
