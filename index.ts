import * as fs from "fs";

function lerArquivo() {
    try {
        const dados = fs.readFileSync("./bd.json", "utf-8");
        console.log(dados);
    } catch (error) {
        console.log(error);
    }
}

function escreverArquivo(dados: any) {
    try {
        fs.writeFileSync("./bd.json", JSON.stringify(dados));
        console.log("Arquivo escrito com sucesso!");
    } catch (error) {
        console.log(error);
    }
}

// lerArquivo("./bd.jsons");
escreverArquivo({ nome: "asdf", teste: 123 });
