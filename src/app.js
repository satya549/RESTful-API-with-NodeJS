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
        const getMens = await MenRanking.find({}).sort({"ranking":1})
        res.send(getMens)
    } catch (error) {
        res.status(400).send(error);
    }
})

app.get("/mens/:id", async (req, res) => {
    try {
        const _id = req.params.id
        const getMen = await MenRanking.findById({_id})
        res.send(getMen)
    } catch (error) {
        res.status(400).send(error);
    }
})

app.patch("/mens/:id", async (req, res) => {
    try {
        const _id = req.params.id
        const updateData = req.body;

        const getMen = await MenRanking.findByIdAndUpdate(_id, updateData,{
            new: true
        });
        res.send(getMen)
    } catch (error) {
        res.status(500).send(error);
    }
})

app.delete("/mens/:id", async (req, res) => {
    try {
        const _id = req.params.id

        const getMen = await MenRanking.findByIdAndDelete(_id)
        res.send(getMen)
    } catch (error) {
        res.status(500).send(error);
    }
})

app.listen(port, () =>{
    console.log(`server running on http://localhost:${port}`)
})

