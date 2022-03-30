function calcCircleArea(radius) {
  return Math.PI * Math.pow(radius, 2);
}

function calcCylinderVolume(radius, height) {
  return calcCircleArea(radius) * height;
}

console.log(calcCircleArea(5));
