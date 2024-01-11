// ECMASCRIPT Modules Async
import fs from "fs/promises"

console.log("starting.....");



await fs.writeFile("demo2.txt", "promises and modules", () => {
    console.log("Done...");
})

const a = await fs.readFile("demo2.txt")

const b = await fs.appendFile("demo2.txt", "\n\n\n__addedData")

console.log(a.toString());
console.log(b);



console.log("ending.....");