const mongoose = require ('mongoose');

let BirthdayReminderSchema = mongoose.Schema({
    name:String,
    mobile:Number,
    dob:String
})

module.exports= mongoose.model("Birthdays", BirthdayReminderSchema);