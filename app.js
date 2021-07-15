const express = require("express");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());

const songsController = require("./controllers/songsController")
app.use("/songs", songsController)

app.get("/", (req, res) => {
    res.send("Welcome to Durdona's and AnJu's Tuner App")
})

app.get("*", (req, res) => {
    res.status(404).send("Page Not Found!")
})

module.exports = app;