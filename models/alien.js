var mongoose = require('mongoose'); 


var newSchema = mongoose.Schema({

    fname:String,
    lname:String,
    email:String,
    mno:String,
    image:
    {
        data: Buffer,
        contentType: String
    }

});

module.exports = mongoose.model('users',newSchema);