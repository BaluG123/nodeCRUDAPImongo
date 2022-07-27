const dbConnect = require('../mongodb');
const express = require('express');
const app = express();
const mongodb = require('mongodb');

app.use(express.json())


app.delete('/:id',async (req,res)=>{
    const db = await dbConnect();
    console.log(req.params.id)
    result = await db.deleteOne(
        {_id:new mongodb.ObjectId(req.params.id)}
    )
    console.log(result);
    res.send('Its Done!')
})
app.listen(5555)
console.log('server running! ')
