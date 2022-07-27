const dbConnect = require('../mongodb');

const deleteData = async () =>{
   const db = await dbConnect();
   result=await db.deleteOne({name:'Balesh Goudi'});
   console.log(result)    
};

deleteData();
