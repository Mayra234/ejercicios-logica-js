function countUniqueConsonant(text) {
  const array = text.toLowerCase().replace(/ /g, "").split("");
  const vowels = {
    a: "a",
    e: "e",
    i: "i",
    o: "o",
    u: "u",
    á: "a",
    é: "e",
    í: "i",
    ó: "o",
    ú: "u",
  };
  const uniqueConsonant = [];

  array.forEach((character) => {
    if (
      character !== vowels[character] &&
      !uniqueConsonant.includes(vowels[character])
    ) {
      uniqueConsonant.push(character);
    }
  });

  return uniqueConsonant.length;
}

console.log(countUniqueConsonant("Hola mundo"));
