const express = require("express");
const todos = require("./Routes/todos")
const app = express();
const port = 3000;


//MIDDLEWARES
app.use(express.static("public"));//from Express Package

//routes  middleware
app.use("/todos", todos)

//custom1
app.use((req, res, next) => {
    console.log("M_1");
    next();
})
//custom2
app.use((req, res, next) => {
    console.log("M_2");
    next();
})


app.get("/", (req, res) => {
    console.log("simple root GET");
    res.send('hello world');
})

app.get("/access", (req, res) => {
    console.log("simple root GET public");
    res.sendFile("templates/index.html", { root: __dirname })
})



app.listen(port, () => {
    console.log("Express server running...")
})