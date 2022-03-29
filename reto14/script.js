function calculateDogAge(ageHuman) {
  let sum = 7;
  if (ageHuman == 1) {
    console.log("¡Tu perro tiene " + sum * ageHuman + " años de perro!");
  } else {
    sum = 0;
    for (let i = 0; i < ageHuman; i += 7) {
      sum += i;
    }
    console.log("¡Tu perro tiene " + sum * ageHuman + " años de perro!");
  }
}
calculateDogAge(10);
