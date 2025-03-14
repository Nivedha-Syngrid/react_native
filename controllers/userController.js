const User = require('../models/userModel');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

require('dotenv').config(); 
const JWT_SECRET= process.env.JWT_SECRET || 'randomString123';

//Register User (POST)
const registerUser = async(req,res) => {
    try {
        const { username, email, password, mobileNumber } = req.body;

        const userExists = await User.findOne({email});
        if( userExists ) {
            return res.status(400).json({ errors: [{ msg: "Email already exists" }] });
        }
        const user = new User({ username, email, password, mobileNumber });
        await user.save();
        res.status(201).json({ message: "User created successfully", user });
    }catch(error) {
        res.status(500).json({ message: "Server error", error: error.message });
    }
};

//Login User (POST)
const loginUser = async( req,res ) => {
    try {
        const { email, password } = req.body;

        const userExists = await User.findOne({email});
        //Check if user exists
        if( !userExists ){
            return res.status(400).json({ errors: [{ msg: "Invalid email or password" }] });
        }
        //Compare password
        const isMatch = await bcrypt.compare(password, userExists.password);
        if( !isMatch ){
            return res.status(400).json({ errors: [{ msg: "Invalid email or password" }] });
        }
        const token=jwt.sign({email:userExists.email}, process.env.JWT_SECRET);
        if(res.status(201)){
            return res.json({ status:"Ok", message: "Login successfully", data:token, user: { email: userExists.email, username: userExists.username, mobile: userExists.mobileNumber } });
        }
        
    }catch(error) {
        res.status(500).json({ message: "Server error", error: error.message });
    }
};

//Get User Data (POST)
const getUser = async( req, res ) => {
    try {
        const {token}=req.body;
        if (!token) {
            return res.status(401).json({ message: "Token is required" });
        }
        const decoded=jwt.verify(token, JWT_SECRET);
        const useremail=decoded.email;
        User.findOne({email:useremail}).then((data) => {
            return res.json({ status:"Ok", data:data });
        })
    }catch(error){
        res.status(500).json({ message: "Server error", error: error.message });
    }
};

module.exports = { registerUser,loginUser,getUser };