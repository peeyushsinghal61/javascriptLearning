// let ar = [1, 2, 3, 4, 5];

// // forEach
// //arr.forEach((ele, index) => console.log(ele));
// Array.prototype.myForEach = function (cb) {
//   if (typeof cb != "function") {
//     console.log("hii");
//     throw new Error("callback is not function");
//   }
//   let ans = [];
//   for (let i = 0; i < this.length; i++) {
//     cb(this[i], i);
//   }
//   return ans;
// };

// ar.myForEach((ele, ind) => {
//   console.log(ele);
// });

// Array.prototype.myMap = function (cb) {
//   if (typeof cb != "function") {
//     throw new Error("callback is not function");
//   }
//   let ans = [];
//   for (let i = 0; i < this.length; i++) {
//     ans.push(cb(this[i], i));
//   }
//   return ans;
// };
// let x = ar.myMap((ele, index) => {
//   return 2 * ele;
// });
// console.log(x);

// Array.prototype.myFilter = function (cb) {
//   if (typeof cb != "function") {
//     throw new Error("callback is not function");
//   }
//   let ans = [];
//   for (let i = 0; i < this.length; i++) {
//     if (cb(this[i], i)) ans.push(this[i]);
//   }
//   return ans;
// };
// console.log(
//   ar.myFilter((ele, index) => {
//     return ele > 2;
//   })
// );

// Array.prototype.myReduce = function (cb, initalvalue) {
//   if (typeof cb != "function") {
//     throw new Error("callback is not function");
//   }
//   let ans = initalvalue;
//   for (let i = 0; i < this.length; i++) {
//     ans = cb(this[i], ans);
//   }
//   return ans;
// };
// console.log(
//   ar.myReduce((ele, acc) => {
//     return acc + ele;
//   }, 0)
// );

// // call
// let a = {
//   name: "Sagar",
//   getMessage: function (...mess) {
//     console.log(`Hi ${this.name} ${mess[0]}. Can you ${mess[1]}`);
//   },
// };
// let b = { name: "Amit" };

// //a.getMessage.call(b, "good morning", "test the code");

// Function.prototype.myCall = function (obj = {}, ...args) {
//   if (typeof this != "function") {
//     throw new Error("this is not a type of function ");
//   }
//   obj.fn = this;
//   obj.fn(...args);
// };
// //a.getMessage.myCall(b, "good morning", "test the code");

// Function.prototype.myApply = function (obj = {}, arr = []) {
//   if (typeof this != "function")
//     throw new Error("this is not a type of function ");
//   if (!Array.isArray(arr))
//     throw new Error("2nd parameter should be of type array.");
//   obj.fun = this;
//   obj.fun(...arr);
// };
// //a.getMessage.myApply(b, ["good morning", "test the code"]);

// Function.prototype.myBind = function (obj = {}, ...args) {
//   if (typeof this != "function")
//     throw new Error("this should be of type function");
//   obj.fn = this;
//   return function (...newArgs) {
//     obj.fn(...args, ...newArgs);
//   };
// };
// let bindedFunc = a.getMessage.myBind(b, "good morning");
// bindedFunc("dlm");

// //deepcopy

// let arr = [1, 2, 3, 4, 5, [2, 3, 4]];
// // // function deepCopyArray(arr) {
// // //   let ans = [];
// // //   for (let i = 0; i < arr.length; i++) {
// // //     if (!Array.isArray(arr[i])) ans.push(arr[i]);
// // //     else {
// // //       ans.push(deepCopyArray(arr[i]));
// // //     }
// // //   }
// // //   return ans;
// // // }
// // let arr1 = deepCopyArray(arr);
// // arr1[5][1] = 0;
// // console.log(arr, arr1);

// let item = {
//   name: "perfume",
//   details: {
//     price: "500",
//     mfd: "10th jan",
//   },
// };
// // console.log(item, item1);
// function deepCopy(obj) {
//   //Handle primitive types and null
//   if (obj == null || typeof obj != "object") return obj;

//   // Handle arrays
//   if (Array.isArray(obj)) {
//     let ans = [];
//     for (let i = 0; i < obj.length; i++) {
//       ans.push(deepCopy(obj[i]));
//     }
//     return ans;
//   }

//   // handle plain objects
//   const objCopy = {};
//   for (let ele in obj) {
//     if (obj.hasOwnProperty(ele)) {
//       objCopy[ele] = deepCopy(obj[ele]);
//     }
//   }
//   return objCopy;
// }
// // let arr2 = deepCopy(arr);
// // let item2 = deepCopy(item);
// // item2.details.price = 200;
// // arr2[5][1] = 0;
// // console.log(arr, arr2);
// // console.log(item, item2);
// //console.log(arr2);

// promises
let p1 = new Promise((res, rej) => {
  setTimeout(() => {
    res("p1");
  }, 3000);
});
let p2 = new Promise((res, rej) => rej(100));
let p3 = new Promise((res, rej) => {
  setTimeout(() => {
    res("p2");
  }, 1000);
});

Promise.all([p1, p2, p3])
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });
// Promise.allSettled([p1, p2, p3])
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log(err);
//   });
// Promise.any([p1, p2, p3])
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log(err);
//   });
// Promise.race([p1, p2, p3])
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log(err);
//   });
Promise.myAll = function (promisearray) {
  if (!Array.isArray(promisearray)) {
    throw new Error("object is not iterable");
  }
  let ans = [];

  return new Promise((resolve, reject) => {
    let ans = [];
    if (promisearray.length === 0) resolve(ans);
    promisearray.forEach((promise, index) =>
      promise
        .then((data) => {
          ans[index] = data;
          if (index == promisearray.length - 1) resolve(ans);
        })
        .catch((err) => {
          reject(err);
        })
    );
    ans;
  });
};
// Promise.myAll([p1, p2, p3])
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));

Promise.myAllSettled = function (promisearray) {
  if (!Array.isArray(promisearray)) {
    throw new Error("object is not iterable");
  }
  return new Promise((resolve, reject) => {
    let ans = [];
    let len = promisearray.length;
    if (len === 0) {
      resolve(ans);
    }
    promisearray.map((promise, index) => {
      promise
        .then((data) => (ans[index] = { status: "fulfilled", value: data }))
        .catch((err) => (ans[index] = { status: "rejected", reason: err }))
        .finally(() => {
          len -= 1;
          if (len === 0) resolve(ans);
        });
    });
  });
};
Promise.myAllSettled([p1, p2, p3])
  .then((data) => console.log(data))
  .catch((err) => console.log(err));
Promise.allSettled([p1, p2, p3])
  .then((data) => console.log(data))
  .catch((err) => console.log(err));
Promise.myRace([p1, p2, p3])
  .then((data) => console.log(data))
  .catch((err) => {
    console.log(err);
  });
