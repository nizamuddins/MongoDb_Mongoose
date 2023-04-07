const mongoose = require("mongoose");
mongoose.connect("mongodb+srv://nizam:nizam@cluster0.phabhjk.mongodb.net/MongoDB")
const Schema = mongoose.Schema({
    empName:String,
    empRole:String,
    empExp:String,
})

let User = mongoose.model('mongodb',Schema);
module.exports = User;

