import * as fs from "fs";

function lerArquivo(path: string) {
    try {
        const dados = fs.readFileSync(path, "utf-8");
        console.log(dados);
    } catch (error) {
        console.log(`Erro: ${error}`);
    }
}
lerArquivo("./bd.json");
