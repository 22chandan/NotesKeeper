const express = require('express');
var app = express();
const mongoose = require('mongoose');

const connectTomongo=()=>{
mongoose.connect('mongodb://127.0.0.1:27017/merndb').
then(()=>{
    console.log("Connected Successfully");
}).catch((error)=>console.log("error: " + error));

}


app.get('/', function(req, res){
 res.send("HELLO");
});


app.listen(4000);
module.exports = connectTomongo;