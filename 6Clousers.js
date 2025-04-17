function outerFunction() {
  let outerVariable = "I am outer variable";
  return function innerFuntion() {
    console.log(outerVariable);
  };
}
let a = outerFunction();
a();
//console.log(outerVariable);

function bankAccount(initialBalance) {
  let balance = initialBalance;
  return {
    deposit: (amount) => {
      balance += amount;
      return balance;
    },
    withDraw: (amount) => {
      if (amount > balance) return "Insufficient function";
      balance -= amount;
      return balance;
    },
    getBalance() {
      return balance;
    },
  };
}

const account = bankAccount(100);
console.log(account.deposit(500));
console.log(account.withDraw(200));
console.log(account.getBalance());
console.log(account.balance); // undefined
