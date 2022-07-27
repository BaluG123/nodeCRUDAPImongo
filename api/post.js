const dbConnect=require('../mongodb');
const express = require('express');
const app = express();

app.use(express.json())

app.post('/post',async (req,res)=>{
    const db=await dbConnect()
    const result=await db.insert(req.body)
    console.log(req.body);
    res.send(result)
})
app.listen(5000, ()=>{
        console.log("started")
})