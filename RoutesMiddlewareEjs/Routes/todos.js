const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    console.log("get from routes todo");
    res.send({ resp: "get all todos" })
})

router.get("/:id", (req, res) => {
    console.log("get from routes todo_params");
    //http://localhost:3000/todos/1?mode=dark&region=in
    console.log(req.params);
    console.log(req.query);
    res.send({ resp: "get all todos", slug: req.params.id, queries: req.query })
})

router.get("/completed", (req, res) => {
    console.log("get from routes todo_completed");
    res.send({ resp: "get all completed" })
})

module.exports = router;