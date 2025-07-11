import jwt from "jsonwebtoken";
import User from "../models/user.js"

const authMiddleware = async (req, res, next) => {
    const authHeader = req.headers.authorization;

    if(!authHeader || !authHeader.startsWith("Bearer ")) {
        return res.status(401).json({ message: "Authorization token missing" });
    }

    const token = authHeader.split(" ")[1];

    try {
        const decoded = jwt.verify(token, "JWT_SECRET");
        req.user = decoded;
        next();
    } catch (err) {
        console.error("Token verification failed:", err);
        res.status(403).json({ message: "Invalid or expired token" });
    }
}

export default authMiddleware;
