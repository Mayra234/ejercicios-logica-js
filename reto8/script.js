function removeConstants(text) {
  return (text = text.replace(/[^aeiouAEIOU]/g, ""));
}
console.log(removeConstants("mayra alejandra diavanera"));
