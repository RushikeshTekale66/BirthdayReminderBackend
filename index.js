const express = require('express');
require('./Database/connect');
const Birthday = require('./Database/birthday');
const app = express();
const port = 6000;

app.use(express.json());

app.get("/", async(req, res) => {
    let result = await Birthday.find({});
    res.send(result);
})

app.post("/addbirthday", async(req, res)=>{
    let birthday = new Birthday(req.body);
    result = await birthday.save();
    res.send(result);
})

app.listen(port); 