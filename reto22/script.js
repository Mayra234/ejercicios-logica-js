function countUniqueVowel(text) {
  let regexp = new RegExp("[aeiouAEIOU]g");
  const result = text.replace(regexp, "").length;
  if (result > 1) {
    console.log(result);
  }
}
countUniqueVowel("hiA");
