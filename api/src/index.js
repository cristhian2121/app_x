import "dotenv/config";
import express from "express";
import { messages, users } from "./data";
import cors from "cors";
import bodyParser from "body-parser";
import mongoose from "mongoose"
import { StudentModel } from "./schemas/studentSchema";
import path from "path"
import jsonStudens from "./mock/students.json";


const app = express();
const url = `mongodb://${process.env.MONGO_URL}:27017`

mongoose.connect(
  url,
  {
    // useUnifiedTopology: true,
    user: process.env.MONGO_INITDB_ROOT_USERNAME,
    pass: process.env.MONGO_INITDB_ROOT_PASSWORD
  }
)

const db = mongoose.connection;
mongoose.set("strictQuery", true);

db.on("all",async () => {
  // validate if is necesary install data
  const res = await StudentModel.count()
})


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
  return res.status(200).send(Object.values(users));
});

app.get("/students", async (req, res) => {
  const totalStudents = await StudentModel.count()
  if(totalStudents == 0) {
    const students = []
    for (let i = 0; i < jsonStudens.length; i++) {
      const element = jsonStudens[i];
      if(element) {
        students.push(element)
      }      
    }
    await StudentModel.insertMany(students)   
  }

  return res.send("Ok");
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
