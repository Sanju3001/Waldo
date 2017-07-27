
function findWaldo(arr) {

  arr.forEach(function (currentValue, index, array) {

  if (currentValue === "Waldo") {
  console.log("Found Waldo at index " + index + "!");
}
});

}

findWaldo(["Alice", "Bob", "Waldo", "Winston"]);