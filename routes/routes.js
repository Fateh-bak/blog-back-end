const express = require('express')
const cors = require('cors')
const router = express.Router()
const db = require("../database/database");
const database = require('../../../00-starting-project/data/database');


router.get("/",async function (req,res){
    console.log("requested recieved")
    const database = await db.getDb()
    articles = await database.collection('articles').find().toArray()
    articles = JSON.stringify(articles)
    res.status(200)
    res.json(articles)
})

router.post('/sendCredentials',async function(req,res){
    console.log(req.body)
    const body = {message:"data recieved"}
    const data = JSON.stringify(body)
    res.json(data)
})

module.exports={router:router}