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

// https://github.com/mde/ejs/wiki/Using-EJS-with-Express
//Ejs template engine
app.set('view engine', 'ejs');

app.get("/inject-ejs/:siteName", (req, res) => {
    const { siteName } = req.params;
    const { placeHolder } = req.query;
    // http://localhost:3000/inject-ejs/Ahindra?placeHolder=search_now
    console.log("simple root GET public");
    res.render("index", {siteName,placeHolder})
})


app.listen(port, () => {
    console.log("Express server running...")
})