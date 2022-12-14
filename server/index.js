const express = require('express')
const app = express()

app.get('/hello',(req,res)=>{
    res.send('hello world')
})

app.listen(8000,()=>
{
    console.log('Server started on 8000')
})