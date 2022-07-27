const dbConnect = require('../mongodb');

const readData = async () =>{
    let db=await dbConnect();
    result= await db.find().toArray();
    console.log(result);
}

readData();