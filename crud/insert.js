const dbConnect = require('../mongodb');

const insertData = async ()=>{
    let db = await dbConnect();
    result = await db.insert(
        {name:'samrin',age:22,gender:'female',email:'samrin1072000@gmail.com',from:'gokak'}
    );
    console.log(result);
}
insertData();