const express = require('express');
const dbConnect=require('../mongodb');
const app = express();

app.get('',async (req,res)=>{
    let db = await dbConnect();
    let result = await db.find().toArray();
    console.log(result)
    res.send({name:'balu'})
})
app.listen(5000);