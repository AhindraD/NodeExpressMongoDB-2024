import fs from "fs";
import path from "path";

const pathName = `C:\\STORE_DATA\\zProjectsLatest\\Harry-SigmaWebDev\\NodeExpressMongoDB-2024\\ClutterFreeScript\\misc`;
const files = fs.readdirSync(pathName);
// console.log(files);


files.forEach((file, index, arr) => {
    const extension = path.extname(file).slice(1).toUpperCase();
    // console.log(extension);
    const destinationFolder = path.join(pathName, extension);
    const categoryExists = fs.existsSync(destinationFolder);
    // console.log(categoryExists);
    if (!categoryExists) {
        fs.mkdir(destinationFolder, { recursive: true }, (err) => {
            if (err) throw new Error(err)
        });
    }
    const newFilePath = path.join(destinationFolder, file);
    fs.rename(path.join(pathName, file), newFilePath, (err) => {
        if (err) throw new Error(err)
        else {
            console.log(`SUCCESS >>>  ${path.basename(newFilePath)} moved  under ${extension} folder.....`)
        }
    })
})