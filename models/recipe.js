const mongoose = require('mongoose');

const recipeSchema = new mongoose.Schema({
  title:{
    type:String,
    required:true
  },
  ingredients:{
    type:String,
    required:true
  },
  instructions:{
    type:String,
    required:true
  },

  time:{
    type:String,
    required:true
  },
  
  coverImage:{
    type:String
  }
},{timestamps:true})


module.exports = mongoose.model("Recipe",recipeSchema);

