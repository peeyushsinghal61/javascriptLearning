// For in --> iterate over the properties of an object.
// For of--> iterate over the properties of any iterable not object.
let person = { name: "Shalini", age: 24, city: "Noida" };

for (let key in person) {
  console.log(key, person[key]);
}

let course = "javascript";
let courses = ["javascript", "java"];
for (let c of course) {
  console.log(c.toLocaleUpperCase());
}
for (let c of courses) {
  console.log(c.toLocaleUpperCase());
}
// for (let key of person) {
//   console.log(key.toLocaleUpperCase());
// }

// For each----->
let arr = [1, 2, 3, 4, 5];

arr.forEach((item, key) => console.log(item * item, " ", key));
