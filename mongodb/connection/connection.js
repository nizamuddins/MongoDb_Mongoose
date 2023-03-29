const {MongoClient} = require("mongodb");
const url = 'mongodb+srv://Nizam:Nizam@cluster0.phabhjk.mongodb.net/test';
const client = new MongoClient(url);
const database = "MongoDB";
let myFunc = async ()=>{
    let data1 = await client.connect();
    let data2 = data1.db(database);
    return data2.collection("mongodb");
}

module.exports = myFunc;




