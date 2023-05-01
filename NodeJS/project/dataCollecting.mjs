import { createJSONFile } from "./filesOperations.mjs";
import { dataOperations } from "./dataOperations.mjs";

//todos
dataOperations("todos", (data) => {
  createJSONFile("todos", JSON.stringify(data));
});

//users
dataOperations("users", (data) => {
  createJSONFile("users", JSON.stringify(data));
});
