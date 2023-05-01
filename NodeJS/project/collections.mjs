// реалізуйте новий файл collections.json,
// що міститиме відповідні данні про компанії з файлу
// users.json
import { createJSONFile } from "./filesOperations.mjs";
import users from "./users.json" assert { type: "json" };

const data = [];

users.forEach((user) => {
  data.push(user.company);
});

createJSONFile("collections", JSON.stringify(data));
