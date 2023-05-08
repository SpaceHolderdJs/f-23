import express from "express";
import cors from "cors";
import users, {
  checkIfUserIsDeleted,
  getNoneDeletedUsers,
} from "./data/users.mjs";
import cars from "./data/cars.mjs";

const PORT = 7777;

const expressApp = express();

expressApp.use(express.json());

expressApp.use(
  cors({
    origin: "*",
  })
);

// GET, - get certain data from server (without body)
// POST, - send certain data to server (with body)
// PUT, - major update of information (with body)
// PATCH, - minor update of information (with body)
// DELETE - deletion of certain information (body is optional)

expressApp.get("/users", (req, res) => {
  res.status(200).send(getNoneDeletedUsers());
});

expressApp.post("/users", (req, res) => {
  const { name, age } = req.body;
  users.push({ name, age, id: users.length + 1 });
  res.status(201).send(users);
});

expressApp.patch("/users", (req, res) => {
  const { id, age } = req.body;

  const isUserDeleted = checkIfUserIsDeleted(id);
  if (isUserDeleted) return res.sendStatus(404);

  users.map((user, index) => {
    if (id === user.id) {
      const updatedUser = { ...user, age };
      users[index] = updatedUser;
      return updatedUser;
    }
    return user;
  });

  res.status(200).send(getNoneDeletedUsers());
});

expressApp.delete("/users/:id", (req, res) => {
  // const { id } = req.body;
  const { id } = req.params;

  console.log(req.query.name, "QUERY");
  console.log("USER id", id);

  const potentialUserIndex = users.findIndex((user) => user.id === +id);
  const potentialUser = users[potentialUserIndex];

  if (!potentialUser) return res.sendStatus(404);

  users[potentialUserIndex] = { ...potentialUser, isDeleted: true };

  res.sendStatus(204);
});

expressApp.get("/cars", (req, res) => {
  res.status(200).send(cars);
});

// написати ендпоінт (GET), що повертає данні про автомобілі /cars

// fetch("link...", {
//   method: "POST",
//   body: JSON.stringify({ name: "Igor" }),
// })
//   .then((data) => data.json())
//   .then((info) => console.log(info));

expressApp.listen(PORT, () => {
  console.log(`App is starting at port ${PORT}`);
});
