import express from "express"
import connectDB from "./database/connect.js"
import cors from "cors";
import authRoutes from "./routes/authRoute.js"


const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/auth', authRoutes);

app.get("/", (req, res) => {
    res.send("App is running");
})

const PORT = 4000;

app.listen(PORT, async () => {
    await connectDB();
    console.log(`server listening on http://localhost:4000`);
})