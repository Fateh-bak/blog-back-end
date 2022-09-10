const { MongoClient } = require("mongodb");
const { get } = require("../../../00-starting-project/routes/blog");
const url= "mongodb://127.0.0.1:27017/"

let database;
async function connectToDb(){
    client = await MongoClient.connect(url)
    database = await client.db("blog")


}
async function getDb(){
    database = await database
    return database

}
connectToDb().then(()=>{getDb()})

module.exports = {connectToDb:connectToDb, getDb:getDb}

