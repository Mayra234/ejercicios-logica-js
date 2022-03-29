function removeVowels(a) {
  return (a = a.replace(/[aeiouAEIOU]/g, ""));
}

console.log(removeVowels("Mayra Alejandra"));
