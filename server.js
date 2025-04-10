const express = require('express');
const { getRecipes } = require('./controller/recipe');
const app = express();
const cors = require('cors');
const dotenv = require('dotenv').config()
const connectDB = require('./config/connectionDB')

const PORT = process.env.PORT || 6969;
connectDB()
app.use(express.json());
app.use(cors());

app.get("/",(req,res)=>{
  res.send("The Recipe API is Working Fine");
})

app.use("/",require("./routes/user"))
app.use("/recipe",require("./routes/recipe"))


app.listen(PORT,(err)=>{
  console.log( `app is listening in port ${PORT}`);
})