function countVowels(text) {
  return text.replace(/[^aeiouAEIOU]/g, "").length;
}
console.log(countVowels("Mayra Alejandra"));
