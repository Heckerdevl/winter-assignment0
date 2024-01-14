const express = require('express');
const app= express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const fs=require('fs');
const path = require('path');
// const staticPath= path.join(__dirname,'../Public/signin.html');


const file=fs.readFileSync('../Public/signin.html');
const uri = 'mongodb://localhost:27017/Winter Assignment';

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });


const userSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,

  });

const User = mongoose.model('User', userSchema);


app.use(bodyParser.urlencoded({ extended: true }));


// built in middleware
app.use(express.static(path.join(__dirname,'../Public')));

app.post('/submit', (req, res) => {
    try {
      const newUser = new User({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
      });
  

      const savedUser = newUser.save();
    //   console.log(newUser)

      res.send(`User ${savedUser.firstName} ${savedUser.lastName} successfully added to the database.`);
    } catch (error) {
      console.error(error);
      res.status(500).send('Internal Server Error');
    }
  });


app.get("/" , (req , res)=>{
    res.end(file)
});


app.listen(80 ,"localhost", ()=>{
    console.log("your appp is successflly running on port 80")
});
