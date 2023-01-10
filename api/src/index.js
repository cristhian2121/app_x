import "dotenv/config";
import express from "express";
import { messages, users } from "./data";
import cors from "cors";
import bodyParser from "body-parser";
import mongoose, { Types } from "mongoose"
import { StudentModel } from "./schemas/studentSchema";
import { DressMakerModel } from "./schemas/dressMaker";
import jsonStudens from "./mock/students.json";
import jsonDressMaker from "./mock/dressMaker.json";
import { MessageModel } from "./schemas/messageSchema";


const app = express();
// parse application/json
app.use(bodyParser.json());
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

app.get("/", (req, res) => {
  
  return res.send("Hello world");
});

//////////// DressMaker ////////////
app.get("/students", async (req, res) => {
  const students = await StudentModel.find({})
  return res.status(200).send(students)
});

app.get("/students/:id", async (req, res) => {
  const { id } = req.params
  const student = await StudentModel.findOne({ _id: Types.ObjectId(id) })
  return res.status(200).send(student)
});

app.get("/db/students", async (req, res) => {
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

//endpint
app.post("/students/login", async (req, res) => {
  console.log(req.body);
  const { password, email } = req.body;

  // validate properties
  if(!password || !email){
    return res.status(400).send(false)
  }

  const student = await StudentModel.findOne({ nickName: email})
  if(!student){
    return res.status(401).send(false)
  }

  if(student.password !== password) {
    return res.status(401).send(false)
  }

  return res.status(200).send(true)
});

//////////// DressMaker ////////////
app.get("/dressMakers", async (req, res) => {
  const dressMakers = await DressMakerModel.find({})
  return res.status(200).send(dressMakers)
});

app.post("/dressMakers/login", async (req, res) => {
  const { password, email } = req.body;

  // validate properties
  if(!password || !email){
    return res.status(400).send(false)
  }

  const dressMaker = await DressMakerModel.findOne({ nickName: email })
  if(!dressMaker){
    return res.status(401).send(false)
  }

  if(dressMaker.password !== password) {
    return res.status(401).send(false)
  }

  return res.status(200).send(true)
});

app.get("/dressMakers/:id", async (req, res) => {
  const { id } = req.params
  const dressMaker = await DressMakerModel.findOne({ _id: Types.ObjectId(id) })
  return res.status(200).send(dressMaker)
});

app.get("/db/dressMaker", async (req, res) => {
  const totalDressMaker = await DressMakerModel.count()
  if(totalDressMaker == 0) {
    const dressMaker = []
    for (let i = 0; i < jsonDressMaker.length; i++) {
      const element = jsonDressMaker[i];
      if(element) {
        dressMaker.push(element)
      }      
    }
    await DressMakerModel.insertMany(dressMaker)   
  }

  return res.send("Ok");
});

//////////// Messages ////////////
app.get("/messages/:studentId", async (req, res) => {
  const { studentId } = req.params
  if(!studentId) {
    return res.status(400).send(false)
  }

  const messages = await MessageModel.find({ studentId })
  return res.status(200).send(messages);
});

app.get("/messages/:studentId/:dressMakerId", async (req, res) => {
  const { studentId, dressMakerId } = req.params
  if(!studentId || !dressMakerId) {
    return res.status(400).send(false)
  }

  const messages = await MessageModel.find({ studentId, dressMakerId })
  return res.status(200).send(messages);
});

// TODO: remove it
app.get("/users", (req, res) => {
  // 200/201 -> ok/ok crear
  // 400 -> fallo desde el usuario, no nos envio el token 401, url no existe 404
  // 500 -> fallo del servidor
  return res.status(200).send(Object.values(users));
});
app.get("/users/:userId", (req, res) => {
  return res.send(users[req.params.userId]);
});



app.listen(process.env.PORT, () =>
  console.log(`Example app listening on port ${process.env.PORT}!`)
);
