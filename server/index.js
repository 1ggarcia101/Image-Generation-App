import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import cors from "cors";

const app = express();
const port = 3001;

const connectionString =
  "mongodb+srv://1ggarcia101:WMtaad2x@cluster0.ruy5voy.mongodb.net/?retryWrites=true&w=majority";

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

let db;

mongoose
  .connect(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() =>
    app.listen(port, () => console.log("server is running on port: 3001"))
  )
  .catch((error) => console.log(error.message));
