// function first(mess) {
//   return new Promise((res, rej) => {
//     setTimeout(() => {
//       res(`I am ${mess} function`);
//     }, 1000);
//   });
// }
// function second(mess) {
//   return new Promise((res, rej) => {
//     setTimeout(() => {
//       res(`I am ${mess} function`);
//     }, 500);
//   });
// }
// let third = new Promise((resolve, reject) => {
//   let mess = "third";
//   setTimeout(() => {
//     resolve(`I am ${mess} function`);
//   }, 5000);
// });

// Promise.all([first("first"), second("second"), third])
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => console.log(err));

// // Promise.race([first("first"), second("second"), third])
// //   .then((res) => console.log(res))
// //   .catch((err) => console.log(err));
// // let allSettled = Promise.allSettled([first("first"), second("second"), third])
// //   .then((res) => console.log(res))
// //   .catch((err) => console.log(err));
// // let any = Promise.any([first("first"), second("second"), third])
// //   .then((res) => console.log(res))
// //   .catch((err) => console.log(err));

const promise1 = new Promise((resolve, reject) => {
  setTimeout(reject, 300, "resolved1");
});

//const promise2 = 100;

const promise3 = new Promise((resolve, reject) => reject("resolved2"));

// Promise.allSettled([promise1, promise2, promise3])
//   .then((values) => {
//     console.log("all values returned as an array in a single promise", values);
//   })
//   .catch((err) => {
//     console.log("error returned in a single promise ", err);
//   });
Promise.any([promise1, promise3])
  .then((values) => {
    console.log("all values returned as an array in a single promise", values);
  })
  .catch((err) => {
    console.log("error returned in a single promise ", err);
  });

// callbacks are a way to handle async opeartions in JS.
// Asnyc prograaming in js exists because of Callbacks.
// two issues with callbacks are 1.Inversion of control 2. Callback hell.
