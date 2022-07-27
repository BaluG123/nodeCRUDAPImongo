const dbConnect = require('../mongodb');

const updateData = async () =>{
    const db=await dbConnect();
    result = await db.updateOne(
        {name:'balappa'},
        {$set: {name:"Balesh Goudi"}}
    )
    console.log(result)
}

updateData();