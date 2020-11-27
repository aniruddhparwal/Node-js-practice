const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const User = mongoose.model("User")
const bcrpt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const { JWT_SECRET } = require('../keys')


router.post('/signin', (req, res) => {
    const { email, password } = req.body
    if (!email || !password) {
        return res.status(422).json({ error: "Please Provide all details" })
    }
    User.findOne({ email: email })
        .then(savedUser => {
            if (!savedUser) {
                return res.status(422).json({ error: "invalid credentials" })
            }
            bcrpt.compare(password, savedUser.password)
                .then(doMatch => {
                    if (doMatch) {
                        const token = jwt.sign({ _id: savedUser._id }, JWT_SECRET)
                        res.json({ token })
                        // res.json({ message: "successfull Login" })

                    } else {
                        return res.status(422).json({ error: "invalid credentials" })
                    }
                })
                .catch(err => {
                    console.log(err)
                })
        })
})


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
        bcrpt.hash(password, 12)
            .then(hashedPassword => {
                const user = new User({
                    email,
                    password: hashedPassword,
                    name
                })
                user.save().then(user => {
                    res.json({ message: "saved sucessfully" })
                }).catch(err => {
                    console.log(err)
                })
            })

    })
})

router.get('/', (req, res) => {
    res.send("hello")
})

module.exports = router 