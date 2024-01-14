const express = require('express');
const app= express();
const fs=require('fs')
const path = require('path');
// const staticPath= path.join(__dirname,'../Public/signin.html');


const file=fs.readFileSync('../Public/signin.html');


// built in middleware
app.use(express.static(path.join(__dirname,'../Public')));

app.get("/" , (req , res)=>{
    res.end(file)
});


app.listen(80 ,"localhost", ()=>{
    console.log("your appp is successflly running on port 80")
});
