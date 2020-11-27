const { json } = require("body-parser")
const jwt = require("jsonwebtoken")
const { JWT_SECRET } = require('../keys')
const mongoose = require('mongoose')
const User = mongoose.model("User")

module.exports = (req, res, next) => {
    const { authorization } = req.headers
    if (!authorization) {
        return res.status(401).json({ error: "you must be loggedin" })
    }
    const token = authorization.replace("Bearer ", "")
    jwt.verify(token, JWT_SECRET, (err, payLoad) => {
        if (err) {
            return res.status(401).json({ error: "you must be log  in" })
        }
        console.log("Payload: ", payLoad)
        const { _id } = payLoad
        User.findById(_id).then(userdata => {
            req.user = userdata
            next()
        })
    })
}