const express = require("express");
const bodyParser = require('body-parser')
const app = express();
const cors = require('cors');
const mysql = require('mysql');

const index = require("./routes/index");
const signUp = require("./routes/signUp");
const login = require("./routes/login");
const foodMenu = require("./routes/food-menu");
const order = require("./routes/order");
const searchByLocation = require("./routes/searchByLocation")




// 
require('dotenv').config();


//middleware
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended : false }))


//api routes
app.use("/", index)
app.use("/register", signUp)
app.use("/login", login)
app.use("/food-menu", foodMenu)
app.use("/order", order)
app.use("/food-search", searchByLocation)




app.listen( process.env.PORT || 5000, ()=> {
    console.log(`backend server running on ${process.env.PORT}`)
})