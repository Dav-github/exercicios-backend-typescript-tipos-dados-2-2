import * as fs from "fs";

const escreverArquivo = (json: {} | string) => {
    if (typeof json === "object") {
        let data: string = JSON.stringify(json);

        fs.writeFile("./bd.json", data, (err) => {
            if (err) {
                console.error("Error writing file:", err);
            } else {
                console.log("File written successfully");
            }
        });
    } else if (typeof json === "string") {
        fs.writeFile("./bd.json", json, (err) => {
            if (err) {
                console.error("Error writing file:", err);
            } else {
                console.log("File written successfully");
            }
        });
    }
};
const lerArquivo = (path: string) => {
    fs.readFile(path, "utf-8", (err, data) => {
        if (err) {
            console.error("Error read file:", err);
        } else {
            console.log(data);
        }
    });
};

// escreverArquivo({ nome: "dave" });
lerArquivo("./bd.json");
