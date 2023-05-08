const users = [
  { name: "Igor", age: 23, id: 0 },
  { name: "Oleg", age: 13, id: 1 },
  { name: "Ksenia", age: 17, id: 2 },
];

export const checkIfUserIsDeleted = (id) =>
  users.find((user) => user.id === id)
    ? users.find((user) => user.id === id).isDeleted
    : false;

export const getNoneDeletedUsers = () =>
  users.filter((user) => !user.isDeleted);

export default users;
