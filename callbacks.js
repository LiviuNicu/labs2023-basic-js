const obj = {
  increment: 1,
  add: () => {
    console.log(this.increment);
  }
};

const x = {
  value: 123,
  func: function () {
    console.log(this.value)
  },
  lambda: () => {
    console.log(this.value)
  }
}

x.func()
x.lambda()

function add(a, b) {
  return a + b;
}

const multiply = function (a, b) {
  return a * b;
}

const divide = (a, b) => a / b;

// acelasi lucru cu functia de mai sus
// const divide = (a, b) => {
// return  a / b;
// }

add(2, 3);
divide(4, 2);

const count = function (a, b, callback) {
  return callback(a, b);
}

console.log(count(1, 2, add));
console.log(count(4, 2, divide));
console.log(count(5, 2, function (a, b) {
  return a - b;
}))
console.log(obj.add());
