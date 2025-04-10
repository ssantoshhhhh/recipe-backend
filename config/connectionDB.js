const mongoose = require('mongoose');

const connectDB = async () =>{
  await  mongoose.connect(process.env.CONNECTION_STRING)
    .then(console.log(`The DataBase is Connected successfully`))
}

module.exports = connectDB;