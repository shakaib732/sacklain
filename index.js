const express = require('express')
const app = express();


app.get('/',(req,res)=>{

    res.json({code:200,"message":"Running"})

})

app.listen(8081)