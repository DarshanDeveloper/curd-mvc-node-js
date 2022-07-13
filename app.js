

var express = require('express');

var mongoose = require('mongoose'); 

var app = express();


const db = 'mongodb+srv://crudops:crudopsconfirm@cluster0.jq0gw.mongodb.net/mernstack?retryWrites=true&w=majority';

mongoose.connect(db);

var connection = mongoose.connection;

connection.once('open',function(){

    console.log("connection success");
});


app.use(express.json())

const temprouter = require('./routers/insert');

app.use('/temp',temprouter);

app.listen(9000,()=> {

    console.log("server started on new");

})

