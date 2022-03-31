function filterNames(namesList, word) {
  return namesList.filter((name) => name.match(new RegExp(word)));
}
const names = ["luisa", "carla", "mariana", "roberta"];

console.log(filterNames(names, "a"));
