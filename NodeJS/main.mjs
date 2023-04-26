import helloFromMain2, { n, obj } from "./main2.mjs";

function sum(a, b) {
  return a + b;
}

const greetings = (msg, quantity) => {
  for (let i = 0; i < quantity; i++) {
    console.log(msg);
  }
};

const result = sum(10, 20) + sum(40, 50);
console.log(result);

greetings("Hello", 5);

helloFromMain2();
console.log(n, " N is here");
console.log(obj, "object");

console.table(obj);
