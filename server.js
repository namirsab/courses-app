require("dotenv").config();
const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).send("Hello World");
});

const courses = [
  {
    _id: "1",
    name: "Advanced React",
    location: "Remote",
  },
  {
    _id: "2",
    name: "CSS for Beginners",
    location: "Hamburg",
  },
  {
    _id: "3",
    name: "What the hell is JavaScript?",
    location: "Köln",
  },
  {
    _id: "4",
    name: "MongoDB: storing data the easy way",
    location: "Remote",
  },
  {
    _id: "5",
    name: "NodeJS on steroids",
    location: "Remote",
  },
  {
    _id: "6",
    name: "NodeJS on steroids",
    location: "Remote",
  },
  {
    _id: "7",
    name: "NodeJS on steroids",
    location: "Remote",
  },
  {
    _id: "8",
    name: "NodeJS on steroids",
    location: "Remote",
  },
  {
    _id: "9",
    name: "NodeJS on steroids",
    location: "Remote",
  },
  {
    _id: "10",
    name: "NodeJS on steroids",
    location: "Remote",
  },
  {
    _id: "11",
    name: "NodeJS on steroids",
    location: "Remote",
  },
  {
    _id: "12",
    name: "NodeJS on steroids",
    location: "Remote",
  },
  {
    _id: "13",
    name: "NodeJS on steroids",
    location: "Remote",
  },
  {
    _id: "14",
    name: "NodeJS on steroids",
    location: "Remote",
  },
];

app.get("/api/courses", (req, res) => {
  res.status(200).json(courses);
});

const { PORT } = process.env;

app.listen(PORT, () => {
  console.log(`listening in port ${PORT}`);
});
