const express = require('express');
const db = require('../src/db/connect')
const MenRanking = require("../src/models/mens");


const app = express();
const port = process.env.PORT || 3400;


app.get("/", async (req, res) => {
    res.send("Hello from the server")
})

app.listen(port, () =>{
    console.log(`server running on http://localhost:${port}`)
})

