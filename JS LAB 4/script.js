function greet(name = "there") {
  return `Hello ${name}!`;
}

console.log("Part 1 — greet with a name:", greet("Alexia"));
console.log("Part 1 — greet default (bonus):", greet());

function addNumbers(num1, num2) {
  return Number(num1) + Number(num2);
}

console.log("Part 2 — addNumbers(3, 7):", addNumbers(3, 7));

let x = 10;

function changeValue() {
  let x = 99;
  console.log("Part 3 — inside changeValue(), local x =", x);
}

console.log("Part 3 — global x before changeValue():", x);
changeValue();
console.log("Part 3 — global x after changeValue():", x);

function outerFunction() {
  let count = 0;
  return function () {
    count += 1;
    return count;
  };
}

const increment = outerFunction();
console.log("Part 4 — closure call 1:", increment());
console.log("Part 4 — closure call 2:", increment());
console.log("Part 4 — closure call 3:", increment());

function makeCounter(start = 0, step = 1) {
  let value = start;
  return {
    up() {
      value += step;
      return value;
    },
    down() {
      value -= step;
      return value;
    },
    current() {
      return value;
    }
  };
}

const counter = makeCounter(10, 5);
console.log("Bonus — counter.current():", counter.current());
console.log("Bonus — counter.up():", counter.up());
console.log("Bonus — counter.down():", counter.down());