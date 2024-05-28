const express = require('express');
const db = require('../src/db/connect')
const MenRanking = require("../src/models/mens");
const MensRanking = require('../src/models/mens');


const app = express();
const port = process.env.PORT || 3400;

app.use(express.json());


app.post("/mens", async (req, res) => {
    try {
        const MensRecords = new MensRanking(req.body)
        const result = await MensRecords.save();
        res.send(result)
    } catch (error) {
        res.status(400).send(error);
    }
})

app.get("/mens", async (req, res) => {
    try {
        const getMens = await MenRanking.find({})
        res.send(getMens)
    } catch (error) {
        res.status(400).send(error);
    }
})

app.listen(port, () =>{
    console.log(`server running on http://localhost:${port}`)
})

