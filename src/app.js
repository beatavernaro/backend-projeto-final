const express = require('express')
const app = express()
const cors = require('cors')

const db = require('./config/database')
const userRoutes = require("./routes/userRoutes")

db.connect() 
app.use(cors())
app.use(express.json())
app.use("/user", userRoutes)

module.exports = app

//teste aqui git