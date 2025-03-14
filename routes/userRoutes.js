const express = require('express');
const {registerUser,loginUser,getUser} = require('../controllers/userController');
const { validateUser } = require('../middleware/validation');
const { validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const router = express.Router();

// Middleware to handle validation errors
const validate = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });
    next();
};

router.post('/register', validateUser, validate, registerUser);
router.post('/login', loginUser);
router.post('/userdata',getUser);

module.exports = router;