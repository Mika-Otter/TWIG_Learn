const express = require("express");
const mongoose = require("mongoose");
const userRouter = require("./routers/mainRouter");
require("dotenv").config();

const app = express();

app.use(express.static("./public"));
app.use(express.urlencoded({ extended: true }));
app.use(userRouter);

app.listen(parseInt(process.env.PORT), (err) => {
    if (!err) {
        console.log(`listen on ${process.env.PORT}`);
    } else {
        console.log(err);
    }
});

mongoose.connect("mongodb://127.0.0.1:27017");
