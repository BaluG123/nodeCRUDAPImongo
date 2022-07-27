const {MongoClient} = require('mongodb');
const url = "mongodb://localhost:27017";
const database = "Employee";
const client = new MongoClient(url);

async function dbConnect(){
    let result = await client.connect();
    db = result.db(database);
    return db.collection('details');
}

module.exports = dbConnect;