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

router.post('/',function (req,res){
    console.log("recieved")
    console.log(JSON.parse(req.body))
    // // creating user
    // const user = {
    //     name: req.body.name,
    //     email:req.body.email,
    //     password:req.body.password
    // } 
    // // getting users from database
    // database = await db.getDb()
    // userexist = await database.collection('users').find({email:user.name}).toArray

    // if(!userexist){
    //    await database.collection('users').insertOne({user})
    //     res.json({message: "succes, user registred!", registred:true})
    // }else{
    //     res.json({message: "failed to register, this user alredy exist on our database", registred:false})
    // }


})
module.exports={router:router}