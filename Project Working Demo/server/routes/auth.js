const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const User = mongoose.model("User")

router.post('/signup', (req, res) => {
    console.log("signUp ", req.body)
    const { name, email, password } = req.body

    if (!email || !name || !password) {
        return res.status(422).json({ error: "Please add all", })
    }
    User.findOne({ email: email }).then((savedUser) => {
        if (savedUser) {
            return res.status(422).json({ error: "user already exist", })
        }
        const user = new User({
            email,
            password,
            name
        })
        user.save().then(user => {
            res.json({ message: "saved sucessfully" })
        }).catch(err => {
            console.log(err)
        })
    })
})

router.get('/', (req, res) => {
    res.send("hello")
})

module.exports = router 