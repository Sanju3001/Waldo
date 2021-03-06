
var array = [10, 2, 5, 1, 9];

// sort by number
array.sort(function(a, b) {
  return a - b;
});

console.log(array);

var students = [
  { id: 1, name: "bruce",    age: 40 },
  { id: 2, name: "zoidberg", age: 22 },
  { id: 3, name: "alex",     age: 22 },
  { id: 4, name: "alex",     age: 30 }
];


// sort by name
students.sort(function(a, b) {
  var nameA = a.name.toUpperCase();
  var nameB = b.name.toUpperCase();

  if (nameA < nameB) {
    return -1;
  }
  if (nameA > nameB) {
    return 1;
  }

// names must be equal, sort by age
  return 1;
});

console.log(students);