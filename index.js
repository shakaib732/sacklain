const express = require('express');
const nodemon = require("nodemon");
const dotenv = require("dotenv").config();

const app = express();

const port = process.env.PORT || 5000;


app.get('/',(req,res)=>{

    res.json({code:200,"message":"Shakaib made changes"})

})

app.get('/welcome',(req,res)=>{

    let {num1,num2} = req.query;
    let sum = parseInt(num1)+parseInt(num2)

    res.json({code:200,"Summation":sum})

})

app.get('/user',(req,res)=>{

    res.json({code:200,"message":"user page"})

})

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });