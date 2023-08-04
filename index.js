const express = require('express')
const app = express();


app.get('/',(req,res)=>{

    res.json({code:200,"message":"Saklain made changes"})

})

app.get('/user',(req,res)=>{

    res.json({code:200,"message":"user page"})

})

app.listen(8081)