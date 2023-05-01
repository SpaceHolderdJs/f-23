import fetch from "node-fetch";
import { createTextFile, createJSONFile } from "./filesOperations.mjs";
import users from "./users.json" assert { type: "json" };

console.log("Hello from project");
console.log(users, "users");

// console.log(process);
// console.log(globalThis.global, "window");
// console.log(globalThis);
// console.log(process.env.OS);

// setTimeout(() => {
//   console.log("Hello from timeout");
// }, 2000);

// Написати функцію що видаляє створенні файли керуючись масивом з попереднього завдання

// Написати функцію,
// що приймає масив вигляду [ {fileName: "name", content: "Hello content.."} ]
// і свторює відповідну кількість файлів з переданим контентом та назвою

createTextFile("text", "Hello world!");

const fn = (user, callback) => {
  console.table(user);
  callback(user);
};

fn({ name: "Igor", age: 23 }, (userData) => {
  createJSONFile(`user-${userData.name}`, JSON.stringify(userData));
});
