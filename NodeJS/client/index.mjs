import userService from "./data-operations/users.mjs";

userService.getRequest().then((data) => console.log(data, "DATA [GET]"));
userService
  .postRequest({ name: "Andriy", age: 20, id: 5 })
  .then((data) => console.log(data, "DATA [POST]"));

userService
  .patchRequest({ age: 100, id: 9 })
  .then((data) => console.log(data, "DATA [PATCH]"));
userService
  .deleteRequest({}, 10)
  .then((data) => console.log(data, "DATA [DELETE]"));
