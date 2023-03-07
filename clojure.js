function add() {
  var counter = 0;
  counter += 1;
  return counter;
}

add();
add();
add();

var counter = (function () {
  var privateCounter = 0;
  function change(val) {
    privateCounter += val;
  }

  return {
    increment: function () {
      change(1);
    },
    decrement: function () {
      change(-1);
    },
    value: function () {
      return privateCounter;
    }
  }

})();

console.log(counter.value());
counter.increment();
counter.increment();
console.log(counter.value());
counter.decrement();
console.log(counter.value());
