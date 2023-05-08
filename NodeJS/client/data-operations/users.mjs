import Service from "./service.mjs";

class UserService extends Service {}

const userService = new UserService("http://localhost:7777/users");

export default userService;
