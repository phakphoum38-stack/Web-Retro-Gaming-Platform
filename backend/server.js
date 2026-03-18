const express = require("express")
const cors = require("cors")
const auth = require("./auth")
const cloudsave = require("./cloudsave")

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.static("frontend"))
app.use("/roms", express.static("roms"))

app.post("/login", auth.login)
app.post("/register", auth.register)

app.post("/save", cloudsave.save)
app.get("/load", cloudsave.load)

app.listen(3000, () => {
    console.log("Retro Gaming Platform running")
})
