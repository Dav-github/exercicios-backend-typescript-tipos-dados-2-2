import * as fs from "fs";

type Endereco = {
    cep: string;
    rua: string;
    complemento?: string;
    bairro: string;
    cidade: string;
};

type Usuario = {
    nome: string;
    email: string;
    cpf: string;
    profissao?: string;
    endereco: Endereco | null;
};

function lerArquivo(): any {
    try {
        const dados = JSON.parse(fs.readFileSync("./bd.json", "utf-8"));
        return dados;
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

function cadastroUsuario(usuario: Usuario): string | unknown {
    try {
        let dados = lerArquivo();
        dados as Usuario[];
        dados.push(usuario);
        escreverArquivo(dados);
        return "Usuario Cadastrado!";
    } catch (error) {
        return error;
    }
}

function atualizarUsuario(cpf: string, usuario: Usuario) {
    try {
        let dados = lerArquivo() as Usuario[];

        for (let i = 0; i < dados.length; i++) {
            if (dados[i].cpf === cpf) {
                dados.splice(i, 1, usuario);
                escreverArquivo(dados);
            }
        }
    } catch (error) {
        console.log(error);
    }
}

// cadastroUsuario({
//     nome: "enzo",
//     email: "enzo@email",
//     cpf: "12345678900",
//     endereco: null,
// });

// atualizarUsuario("12345678900", {
//     nome: "enzo A",
//     email: "enzo@email.com",
//     cpf: "12345678900",
//     endereco: {
//         cep: "1234",
//         bairro: "Bairro A",
//         cidade: "Cidade Z",
//         rua: "rua",
//     },
// });

// console.log(lerArquivo());
