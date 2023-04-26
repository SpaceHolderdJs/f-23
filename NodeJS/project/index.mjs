import { createTextFile, removeTextFile } from "./filesOperations.mjs";

console.log("Hello from project");
// console.log(process);
// console.log(globalThis.global, "window");
// console.log(globalThis);
// console.log(process.env.OS);

// setTimeout(() => {
//   console.log("Hello from timeout");
// }, 2000);

// Server request
// fetch("https://jsonplaceholder.typicode.com/todos")
//   .then((response) => response.json())
//   .then((json) => console.log(json));

// Написати функцію що видаляє створенні файли керуючись масивом з попереднього завдання

// Написати функцію,
// що приймає масив вигляду [ {fileName: "name", content: "Hello content.."} ]
// і свторює відповідну кількість файлів з переданим контентом та назвою

createTextFile("text", "Hello world!");
