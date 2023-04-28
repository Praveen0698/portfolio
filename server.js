const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
require('dotenv').config({path: __dirname + '/.env'})
const PORT = process.env.PORT || 3000;

const app = express();

const portfolioSchema = new mongoose.Schema({
  name: String,
  email: String,
  mobile: Number,
  subject: String,
  message: String,
});

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`mongodb connected: ${conn.connection.host}`)
  }
  catch(err) {
    console.log(err)
  }
}

const queries = mongoose.model("Query", portfolioSchema);
// const db = "mongodb+srv://kpking900:praveen@cluster0.gjyojek.mongodb.net/?retryWrites=true&w=majority";

// mongoose.connect(db, {useNewUrlParser: true})
//   .then(() => console.log("connected"))
//   .catch((err) => console.log(err));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.post("/", (req, res) => {
  const entry = new queries({
    name: req.body.Fname,
    email: req.body.email,
    mobile: req.body.number,
    subject: req.body.subject,
    message: req.body.message,
  });
  queries.insertMany(entry);
  res.redirect("/");
});

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log("working");
  });
})

