const path = require("path");
const express = require("express");
const nodemailer = require("nodemailer");
const mongoose = require("mongoose");
const route = require("./routes");
var cors = require('cors');
const db = require("./config/db");
async function connect() {
  try {
    await mongoose.connect("mongodb://localhost/Mern");
    console.log("Connect successfully");
  } catch (error) {
    console.log("Connect failure!!!");
  }
}
db.connect();
module.exports = { connect };
const app = express();
app.use(cors())
app.use(express.json())

route(app) // route init

const PORT = 3000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
