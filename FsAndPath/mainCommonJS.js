//COMMON JS
const fs = require("fs");

console.log("start...");

fs.writeFile("demo1.txt", "demo1 loerm  ipsum", () => {
    console.log("done");
    fs.readFile("demo1.txt", (err, data) => {
        console.log(data.toString());
    })
});

fs.appendFile("demo1.txt", "__addedData", (err, data) => {
    console.log("append ", data);

})

console.log("end...");