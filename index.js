const express = require('express')
const app = express();


app.get('/',(req,res)=>{

    res.json({code:200,"message":"Saklain made changes"})

})

app.listen(8081)