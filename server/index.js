const path = require("path");
const express = require("express");
const nodemailer = require("nodemailer");
const mongoose = require("mongoose");
const route = require("./routes");
var cors = require('cors');
const db = require("./config/db");
require('dotenv').config()


db.connect();
const app = express();
app.use(cors())
app.use(express.json())

route(app) // route init



app.set('port', (process.env.PORT || 8000));

//For avoidong Heroku $PORT error
app.get('/', function(request, response) {
    var result = 'App is running'
    response.send(result);
}).listen(app.get('port'), function() {
    console.log('App is running, server is listening on port ', app.get('port'));
});
