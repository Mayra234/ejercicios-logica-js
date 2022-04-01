function countUniqueVowel(text) {
  const array = text.toLowerCase().split("");
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
  const uniqueVowels = [];

  array.forEach((character) => {
    if (vowels[character] && !uniqueVowels.includes(vowels[character])) {
      uniqueVowels.push(character);
    }
  });

  return uniqueVowels.length;
}

const result = countUniqueVowel("HolA mundo cÓmo estás");
const result2 = countUniqueVowel("MurcIelAgo");
console.log(result);
console.log(result2);
