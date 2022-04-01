function filterNames(namesList, word) {
  return namesList.filter((name) => name.match(new RegExp(word)));
}

const names = ["luisa", "carla", "mariana", "roberta"];
console.log(filterNames(names, "sa")); // ['luisa']
console.log(filterNames(names, "a")); // ["luisa", "carla", "mariana", "roberta"]
console.log(filterNames(names, "la")); // ["carla"]
console.log(filterNames(names, "ar")); // ["carla", "mariana"]
console.log(filterNames(names, "pipí")); // []
