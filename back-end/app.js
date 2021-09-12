const express = require("express");
const mysql = require("mysql");
const bodyParser = require("body-parser");
const dotenv = require("dotenv").config();

// conn.connect((err) => {
//     if (err) {
//         return console.error("Oups, --ERROR: " + err.message);
//     } else {
//         console.log("Database connection --TEST: OK!");
//     }
// });

// conn.end();

const app = express();

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "http://localhost:8080");
    res.setHeader("Access-Control-Allow-Credentials", true);
    res.setHeader(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
    );
    res.setHeader(
        "Access-Control-Allow-Methods",
        "GET, POST, PUT, DELETE, PATCH, OPTION"
    );
    next();
});

app.use(bodyParser.json());

const questionRoutes = require('./routes/Question');

app.use('/api/question', questionRoutes);

module.exports = app;