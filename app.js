require("dotenv").config()
const dbConnection = require("./src/config/dbconnection")
dbConnection()
const express = require("express")
const helmet = require("helmet")
const morgan = require("morgan")
const cors = require("cors")
const routeUser = require("./src/routes/user.router")
const routeHwork = require("./src/routes/hwork-router")

const app = express()

app.use(express.json())
app.use(morgan("dev"))
app.use(helmet())
app.use(cors())

app.get("/", (req, res) => {
    res.send("JKE connected server. continue")
})
app.use("/user", routeUser)
app.use("/homework", routeHwork)


module.exports = app