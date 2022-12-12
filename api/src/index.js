import "dotenv/config";
import express from "express";
import { messages, users } from "./data";
import cors from "cors";
import bodyParser from "body-parser";

const app = express();

app.use(
  cors({
    origin: "*",
  })
);
// parse application/json
app.use(bodyParser.json());

app.get("/", (req, res) => {
  return res.send("Hello world");
});

app.get("/users", (req, res) => {
  // 200/201 -> ok/ok crear
  // 400 -> fallo desde el usuario, no nos envio el token 401, url no existe 404
  // 500 -> fallo del servidor
  console.log("****************");
  return res.status(200).send(Object.values(users));
});

app.get("/users/:userId", (req, res) => {
  return res.send(users[req.params.userId]);
});

app.get("/messages", (req, res) => {
  return res.send(Object.values(messages));
});

app.get("/messages/:messageId", (req, res) => {
  return res.send(messages[req.params.messageId]);
});

app.listen(process.env.PORT, () =>
  console.log(`Example app listening on port ${process.env.PORT}!`)
);
