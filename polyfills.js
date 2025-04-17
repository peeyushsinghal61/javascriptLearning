// // polyfills
// let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

// //forEach
// //arr.forEach(el => console.log(el));
// Array.prototype.myForEach = function (cb) {
//   if (!cb) {
//     throw new Error("Callback is not defined");
//   } else {
//     let ans = [];
//     for (let i = 0; i < this.length; i++) {
//       const res = cb(this[i], i);
//       ans.push(res);
//     }
//     return ans;
//   }
// };
// console.log(
//   "forEach polyfill",
//   arr.myForEach((ele, index) => {
//     return ele;
//   })
// );
// // map
// Array.prototype.myMap = function (cb) {
//   if (!cb) throw new Error("undefined callback function");
//   else {
//     const ans = [];
//     for (let i = 0; i < this.length; i++) {
//       const ele = cb(this[i], i, this);
//       ans.push(ele);
//     }
//     return ans;
//   }
// };
// console.log(
//   "polyfill for map",
//   arr.myMap((ele, i, arr) => {
//     return ele;
//   })
// );

// // filter
// Array.prototype.myFilter = function (cb) {
//   if (!cb) throw new Error("undefined callback function");
//   else {
//     const ans = [];
//     for (let i = 0; i < this.length; i++) {
//       const ele = cb(this[i], i, this);
//       if (ele) ans.push(this[i]);
//     }
//     return ans;
//   }
// };
// console.log(
//   "polyfill for filter",
//   arr.myFilter((ele, i, arr) => {
//     return ele % 2 == 0;
//   })
// );
// // reduce
// Array.prototype.myReduce = function (cb, initalvalue) {
//   if (!cb) throw new Error("undefined callback function");
//   else {
//     let ans = initalvalue;
//     for (let i = 0; i < this.length; i++) {
//       ans = cb(ans, this[i]);
//     }
//     return ans;
//   }
// };
// console.log(
//   "polyfill for reduce",
//   arr.myReduce((acc, ele) => {
//     return ele + acc;
//   }, 0)
// );

// // call
// let person = {
//   name: "apple",
//   getText: function (...mess) {
//     console.log("hello " + `${this.name} ` + `${mess[0]} ` + `${mess[1]}`);
//   },
// };
// let person1 = { name: "boy" };

// Function.prototype.myCall = function (obj = {}, ...args) {
//   if (typeof this !== "function") {
//     throw new Error("not a valid function");
//   }
//   obj.fn = this;
//   obj.fn(...args);
// };
// Function.prototype.myApply = function (obj = {}, ...args) {
//   if (typeof this != "function") {
//     throw new Error("not a function");
//   }
//   if (!Array.isArray(...args)) {
//     throw new Error("TypeError: Not a valid array");
//   }
//   console.log(args);
//   obj.fn = this;
//   obj.fn(...args);
// };
// Function.prototype.myBind = function (obj = {}, ...args) {
//   if (typeof this != "function") {
//     throw new Error("not a function");
//   }
//   obj.fn = this;
//   return function (...newArgs) {
//     obj.fn(...args, ...newArgs);
//   };
// };

// // person.getText.myCall(person1, "good afternoon", "goodBye");

// // person.getText.myApply(person1, ["good afternoon", "goodBye"]);
// let a = person.getText.myBind(person1, "good afternoon");
// console.log(a);

// a("goodBye");

// // Shallow copy:
// let obj = { name: "peter" };
// //let user = Object.assign({}, obj);  -- method 1 for shallow copy
// let user = { ...obj }; //--method 2 for shallow copy
// user.name = "bruce";
// console.log("user is:", user);
// console.log("object is:", obj);

// // problem with shallow copy is it does not works nested levels.
// let obj1 = { name: "peter", address: { city: "Gurgaon", state: "UP" } };
// //let user1 = Object.assign({}, obj);  -- method 1 for shallow copy
// let user1 = { ...obj1 }; //--method 2 for shallow copy
// user1.address.city = "delhi"; // this will update city field of obj1 also. so to overcome this problem we use deep copy.
// console.log("user is:", user1);
// console.log("object is:", obj1);

// // deep copy
// let obj2 = {
//   name: "peter",
//   address: { city: "noida", state: "UP" },
//   getData: function () {
//     return "all data is here";
//   },
// };
// let user2 = JSON.parse(JSON.stringify(obj2));  // Loses functions, undefined, Date, and RegExp.
// user2.address.state = "Raj";
// console.log("user is:", user2);
// console.log("object is:", obj2);

// //disadvantages of deep copy -- it will not work if we are having function and date inside the object. in above example we have getData funtion this will not be copied to user2 object. Only solution for this loadash.
// // let user3 = _.cloneDeep(obj); // _.cloneDeep comes in loadash library
// // console.log(user3);

// // other way for deep copy and shallow copy is to do it manually by creating a function that is looping all the keys of one object and pushing to other object.

// // shallow copy in case of array
// // let arr = [1, 2, 3, 4, [5, 6]];
// // // let arr1=[...arr];
// // let arr1 = Object.assign([], arr);
// // console.log(arr);
// // console.log(arr1);

// // deep copy
// // let arr2 = [1, 2, 3, 4, [5, 6]];
// // // let arr1=[...arr];
// // let arr3 = JSON.parse(JSON.stringify(arr));
// // arr1[4][1] = "c";
// // console.log(arr);
// // console.log(arr1);

// // deepcopy polyfill
// const deepCopy = function (arr) {
//   let ans = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (Array.isArray(arr[i])) {
//       ans = [...ans, deepCopy(arr[i])];
//     } else {
//       ans.push(arr[i]);
//     }
//   }
//   return ans;
// };
// let ar = [1, 2, 3, [4, 5, [9, 6, 7, 8]]];
// let b = deepCopy(ar);
// // b.push(6);
// // b[3].push(7);
// // console.log(ar, b);

// // flatten nested array or polyfill for flat method
// const flattenArray = function (arr) {
//   let ans = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (Array.isArray(arr[i])) {
//       ans = [...ans, ...flattenArray(arr[i])];
//     } else {
//       ans.push(arr[i]);
//     }
//   }
//   return ans;
// };
// // b.push(6);
// // b[3].push(7);
// let c = flattenArray([1, 2, 3, 4]);
// console.log(c);
