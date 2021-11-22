const express = require("express")
const router = express.Router()
const { User } = require("../Models/Users")
const config = require('../knexfile')[process.env.NODE_ENV || 'development']
const bcrpt = require("bcrypt")
const jwt = require("jsonwebtoken")

router.get("/users", (req, res) => {
    User.query()
    .withGraphFetched('trainingForms')
    .then(users => res.status(200).send(users))
})

module.exports = { usersRouter: router }