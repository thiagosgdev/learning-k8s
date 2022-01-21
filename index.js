import express from "express";
import bodyParser from "body-parser";

const app = express();

let startedTime = Date.now();

app.use(bodyParser.json());

app.get("/healthz", (req, res) => {
    let duration = (Date.now() - startedTime) / 1000 ;

    if (duration < 10) {        
        res.status(500).send("Duration:  " + duration);
    }else {
        res.send("Everything is alright");
    }

})

app.get("/", (req, res) => {
    res.send("Test Enviroment Variable K8s "+process.env.TEST);
})

app.listen(5000, console.log("Listening on port 5000"));