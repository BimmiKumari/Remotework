const express = require('express')

// controller funct
const { loginUser, signupUser } = require('../controllers/userController')

const router = express.Router()

// login sign route
router.post('/login', loginUser)
router.post('/signup', signupUser)

module.exports = router