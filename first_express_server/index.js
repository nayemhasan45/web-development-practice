const express = require('express');
const app=express();
const port = 5000;
app.get('/',(req,res)=>{
    res.send("Hello form my first ever server");
})
app.listen(port,()=>{
    console.log(`my server is listening on port : ${port}`);
})