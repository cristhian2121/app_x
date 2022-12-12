import 'dotenv/config';
import express from 'express';
import { messages, users } from "./data"

const app = express();

app.get('/', (req, res) => {
  return res.send('Hello world');
});

app.get('/users', (req, res) => {
  return res.send(Object.values(users));
});

app.get('/users/:userId', (req, res) => {
  return res.send(users[req.params.userId]);
});

app.get('/messages', (req, res) => {
  return res.send(Object.values(messages));
});

app.get('/messages/:messageId', (req, res) => {
  return res.send(messages[req.params.messageId]);
});

app.listen(process.env.PORT, () =>
  console.log(`Example app listening on port ${process.env.PORT}!`),
);