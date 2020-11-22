const express = require('express')
const app = express()
const PORT = 5000


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