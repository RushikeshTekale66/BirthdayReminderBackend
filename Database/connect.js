const mongoose = require('mongoose');
const Url ='mongodb://127.0.0.1:27017/BirthdayReminder'


// try{
//     mongoose.connect(Url);
//     console.log("Connected to database");
// }
// catch(error){
//     console.log("Unable to connect database");
// }

mongoose.connect(Url).then(console.log("Connected to database")).catch((error)=>console.log("Error ", error));