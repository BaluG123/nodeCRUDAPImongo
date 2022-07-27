const dbConnect = require('../mongodb');
const express = require('express');
const app = express();

app.use(express.json())

/* this method with parameter passing .
app.put('/:name',async (req,res)=>{
    const db = await dbConnect();
    console.log(req.params.name, "name")
    result = await db.updateOne( 
        {name:req.params.name},
        {$set:req.body}
     )
     console.log(result)
     res.send(req.body)
}) */

app.put('',async (req,res)=>{
    const db = await dbConnect();
    console.log(req.query.body)
    result = await db.updateOne(
        {name: req.body.name},
        {$set: req.body}
    )
    res.send(req.body)
    console.log(result)
})
app.listen(5000)

