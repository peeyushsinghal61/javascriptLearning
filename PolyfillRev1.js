// let arr = [1, 2, 3, 4, 5, 6];
// forEach
// arr.forEach((ele, index, self) => {
//   console.log(ele);
// });
// Array.prototype.myForEach = function (cb) {
//   if (!cb) {
//     throw new Error("give proper callback");
//   } else {
//     for (let i = 0; i < this.length; i++) {
//       cb(this[i], i, this);
//     }
//   }
// };
// // arr.myForEach((ele, index, arr) => {
// //   console.log(ele);
// // });

// Array.prototype.myMap = function (cb) {
//   if (!cb) {
//     throw new Error("give a callback funtion");
//   } else {
//     let ans = [];
//     for (let i = 0; i < this.length; i++) {
//       let v = cb(this[i], i, this);
//       ans.push(v);
//     }
//     return ans;
//   }
// };
// // console.log(arr.myMap((ele, index, self) => ele));
// // console.log(arr.map((ele, index, self) => ele));

// Array.prototype.myFilter = function (cb) {
//   if (!cb) throw new Error("not a callback");
//   else {
//     let ans = [];
//     for (let i = 0; i < this.length; i++) {
//       if (cb(this[i], i, this)) ans.push(this[i]);
//     }
//     return ans;
//   }
// };
// console.log(arr.myFilter((ele, index, self) => ele % 2 == 0));

// let obj = [
//   { name: "a", age: 24 },
//   { name: "b", age: 25 },
//   { name: "c", age: 26 },
// ];
// Array.prototype.myReduce = function (cb, acc) {
//   if (!cb) throw new Error("give a cb");
//   else {
//     let ans = acc;
//     for (let i = 0; i < this.length; i++) {
//       ans = cb(ans, this[i], i, this);
//     }
//     return ans;
//   }
// };

// console.log(
//   arr.myReduce((acc, ele, index, self) => {
//     return acc + ele;
//   }, 0)
// );

// call

// apply

// bind
let obj = {
  name: "Peeyush Singhal",
  getName: function (message, message1) {
    console.log(message);
    console.log(`hi, my name ${this.name}, ${message} ${message1}`);
  },
};
let obj1 = {
  name: "Ayush Singhal",
};
// Function.prototype.myCall = function (object = {}, args) {
//   if (typeof object !== "object")
//     throw new Error("parameter is not of type object");
//   else if (typeof this !== "function") {
//     throw new Error("not an function");
//   } else {
//     console.log(this);
//     object.fun = this;
//     object.fun(args);
//   }
// };
// Function.prototype.myApply = function (object = {}, args) {
//   console.log(Array.isArray(args));
//   if (typeof this != "function") throw new Error("not a valid function");
//   else if (!Array.isArray(args)) throw new Error("not a valid array");
//   else {
//     object.fun = this;
//     object.fun(args);
//   }
// };
// Function.prototype.myBind = function (object = {}, args) {
//   if (typeof object != "object")
//     throw new Error("parameter is not of type object");
//   else if (typeof this !== "function") throw new Error("not a valid function");
//   object.fun = this;
//   return function (...newArgs) {
//     object.fun(...args, ...newArgs);
//   };
// };
// obj.getName.myCall(obj1, "good morning");
// obj.getName.myApply(obj1, ["good morning"]);
// let x = obj.getName.myBind(obj1);
// console.log(x());

//obj.getName.call(null, "good");

//console.log(globalThis);

Function.prototype.myCall1 = function (context, ...args) {
  // Ensure `this` refers to the function that calls `myCall`
  context = context || globalThis; // Use `globalThis` for fallback context (window in browsers, global in Node.js)

  // Generate a unique symbol to avoid collision in the context
  const fnSymbol = Symbol("fn");

  // Assign the function to the context
  context[fnSymbol] = this;

  // Call the function with the given arguments and bind `this`
  const result = context[fnSymbol](...args);

  // Clean up the function property on the context
  delete context[fnSymbol];

  // Return the result of the function call
  return result;
};

Function.prototype.myApply1 = function (context, args) {
  // Ensure `this` refers to the function that calls `myApply`
  context = context || globalThis;

  // Generate a unique symbol to avoid collision in the context
  const fnSymbol = Symbol("fn");

  // Assign the function to the context
  context[fnSymbol] = this;

  // If no arguments are passed, we use an empty array
  const result = context[fnSymbol](...(args || []));

  // Clean up the function property on the context
  delete context[fnSymbol];

  // Return the result of the function call
  return result;
};

Function.prototype.myBind = function (context, ...args) {
  const fn = this; // `this` is the function that calls `myBind`
  // Return a new function that will call the original function with the desired `this` and arguments
  return function (...newArgs) {
    return fn.myApply(context, [...args, ...newArgs]);
  };
};
//obj.getName.myApply1(obj1, ["good", "morning"]);
Function.prototype.myCall2 = function (obj, ...args) {
  obj = obj || globalThis;

  const fnSymbol = Symbol("fn");
  obj[fnSymbol] = this;
  obj[fnSymbol](...args);
};
Function.prototype.myApply2 = function (context, args) {
  context = context || null;
  const fnSymbol = Symbol("fn");
  context[fnSymbol] = this;
  context[fnSymbol](...(args || []));
};
Function.prototype.myBind2 = function (context, ...args) {
  context = context || null;
  let fnSymbol = Symbol("fn");
  context[fnSymbol] = this;
  return function (...newargs) {
    context[fnSymbol](...args, ...newargs);
  };
};
obj.getName.myCall2(obj1, "good", "morning");
obj.getName.myApply2(obj1, ["good", "morning"]);
let x = obj.getName.myBind2(obj1, "good", "morning");
x();
