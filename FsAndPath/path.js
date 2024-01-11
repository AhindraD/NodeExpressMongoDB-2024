import path from "path";

const myPath = `C:\\STORE_DATA\\zProjectsLatest\\Harry-SigmaWebDev\\BACKEND\\FsAndPath\\demo2.txt`

console.log("extension:  ", path.extname(myPath));
console.log("directory:  ", path.dirname(myPath));
console.log("baseName:  ", path.basename(myPath));


//joins  differnt formats of paths according to operating sysytem
console.log(path.join("c:/", "FsAndPath\\demo2.txt"));