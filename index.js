import express from "express";
import bodyParser from "body-parser";

const app = express();

app.use(bodyParser.json());

app.get("/", (req, res) => {
    res.send("Hello K8s")
})

app.listen(5000, console.log("Listening on port 5000"));