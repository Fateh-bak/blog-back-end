const express = require('express')
const cors = require('cors')
const router = express.Router()
const db = require("../database/database");


router.get("/",async function (req,res){
    console.log("requested recieved")
    database = await db.getDb()
    articles = await database.collection('articles').find().toArray()
    articles = JSON.stringify(articles)
    res.status(200)
    res.json(articles)
})


module.exports={router:router}