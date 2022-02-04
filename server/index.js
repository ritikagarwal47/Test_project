const express = require('express')
const app = express()
const cors = require('cors')

app.use(cors())

app.get('/hello',(req,res)=>{
    res.send('Hello World')
})

app.listen(1337,()=>{
    console.log("Server Started as 133333333");
})