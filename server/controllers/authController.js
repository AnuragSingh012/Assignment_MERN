import bcrypt from "bcryptjs"
import User from "../models/user.js"
import jwt from "jsonwebtoken"

export const registerUser = async (req, res) => {
    try {
        const { username, email, password } = req.body;

        const existingUser = await User.findOne({ email });
        if(existingUser) return res.status(400).json({ message: "User already Registered" });

        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new User({
            username,
            email,
            password: hashedPassword,
        })
        await newUser.save();
        res.status(201).json({ message: "User registration successfully" });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Server error"});
    }
}

export const loginUser = async (req, res) => {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if(!user) return res.status(400).json({ message: "User not found" });

    const verifyPassword = await bcrypt.compare(password, user.password);
    if(!verifyPassword) return res.status(400).json({ message: "Incorrect Password" });

    const token = jwt.sign({ id: user._id }, "JWT_SECRET", { expiresIn: '1h' });

    res.json({ token, user: { id: user._id, email: user.email, username: user.username }});
}