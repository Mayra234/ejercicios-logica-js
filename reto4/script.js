function filterNumber(n, world) {
  n.filter((name) => {
    console.log(name.match(world));
  });
}
const names = ["luisa", "carla", "mariana", "roberta"];
console.log(filterNumber(names, "sa"));
