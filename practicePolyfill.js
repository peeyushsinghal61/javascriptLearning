let p1 = new Promise((resolve, reject) => {
  setTimeout(reject, 1000, "prom1");
});
let p2 = new Promise((resolve, reject) => {
  setTimeout(reject, 200, "err2");
});
let p3 = new Promise((resolve, reject) => {
  setTimeout(reject, 3000, "prom3");
});

Promise.myAll = function (promiseArray) {
  let result = [];
  return new Promise((resolve, reject) => {
    if (promiseArray.length === 0) {
      resolve(result);
    }
    promiseArray.forEach((promise, index) => {
      promise
        .then((data) => {
          result[index] = data;
          if (index == promiseArray.length - 1) {
            resolve(result);
          }
        })
        .catch((err) => {
          reject(err);
        });
    });
  });
};
Promise.myAllSettled = function (promiseArray) {
  let result = [];
  return new Promise((res, rej) => {
    promiseArray.forEach((promise, index) => {
      promise
        .then((data) => {
          result[index] = { status: "fulfilled", value: data };
          if (index == promiseArray.length - 1) res(result);
        })
        .catch((err) => {
          result[index] = { status: "rejected", reason: err };
          if (index == promiseArray.length - 1) rej(result);
        });
    });
  });
};
Promise.myRace = function (promiseArray) {
  return new Promise((resolve, reject) => {
    promiseArray.forEach((promise, index) => {
      promise.then((data) => resolve(data)).catch((err) => reject(err));
    });
  });
};
Promise.myAny = function (promiseArray) {
  return new Promise((resolve, reject) => {
    let rejected = 0,
      errorArray = [];
    promiseArray.forEach((promise, index) => {
      promise
        .then((data) => {
          resolve(data);
        })
        .catch((err) => {
          rejected += 1;
          errorArray[index] = err;
          if (rejected == promiseArray.length)
            reject([
              new AggregateError(errorArray, "All promises were rejected"),
            ]);
        });
    });
  });
};

// Promise.myAll([p1, p2, p3])
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));
// Promise.all([p1, p2, p3])
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));

// Promise.allSettled([p1, p2, p3])
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));
// Promise.myAllSettled([p1, p2, p3])
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));

// Promise.race([p1, p2, p3])
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));
// Promise.myRace([p1, p2, p3])
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));

// Promise.any([p1, p2, p3])
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));
// Promise.myAny([p1, p2, p3])
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));
