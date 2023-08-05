const express = require('express');
const nodemon = require("nodemon");
const dotenv = require("dotenv").config();

const app = express();

const port = process.env.PORT || 5000;


app.get('/',(req,res)=>{

    res.json({code:200,"message":"Shakaib made changes"})

})

app.get('/welcome',(req,res)=>{

    res.json({code:200,"message":"welcome"})

})

app.get('/user',(req,res)=>{

    res.json({code:200,"message":"user page"})

})

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });