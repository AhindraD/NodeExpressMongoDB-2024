import express from "express";
const app = express();
const port = 3000;


//MIDDLEWARES
app.use(express.static("public"));//from Express Package



app.get("/", (req, res) => {
    // res.send('hello world')
    res.sendFile("index.html", { root: __dirname })
})



app.listen(port, () => {
    console.log("Express server running...")
})