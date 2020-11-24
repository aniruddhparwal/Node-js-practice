const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const PORT = 5000
const { MONGOURI } = require('./keys')

require('./user')
app.use(express.json())
// app.use(bodyParser.json())
app.use(require('./routes/auth'))

mongoose.connect(MONGOURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

mongoose.connection.on("connected", () => {
    console.log("Connected to db")
})
mongoose.connection.on("error", (err) => {
    console.log("Error: ", err)
})


// const customMiddleware = (req, res, next) => {
//     console.log("midd")
//     next()
// }

// // app.use(customMiddleware)

// app.get('/', (req, res) => {
//     console.log("home")
//     res.send("hii")
// })

// app.get('/about', customMiddleware, (req, res) => {
//     console.log("about")
//     res.send("about ")
// })

app.listen(PORT, () => {
    console.log("server running", PORT)
})