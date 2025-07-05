import express from "express"

const app = express();

app.get("/", (req, res) => {
    res.send("App is running");
})


app.listen(4000, () => {
    console.log(`server listening on http://localhost:4000`);
})