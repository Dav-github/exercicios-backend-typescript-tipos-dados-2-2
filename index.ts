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
                return;
            }
        }
        console.log("CPF não encontrado");
    } catch (error) {
        console.log(error);
    }
}

function detalharUsuario(cpf: string) {
    try {
        let dados = lerArquivo() as Usuario[];

        for (let i = 0; i < dados.length; i++) {
            if (dados[i].cpf === cpf) {
                console.log(dados[i]);
                return;
            }
        }
        console.log("usuario não encontrado");
    } catch (error) {
        console.log(error);
    }
}

function apagarUsuario(cpf: string) {
    try {
        let db = lerArquivo() as Usuario[]
        let indiceParaApagar: number = -1
        
        for (let i = 0; i < db.length; i++){
            if (db[i].cpf == cpf) {
                indiceParaApagar = i
            }
        }

        if (indiceParaApagar == -1) {
            return "usuario não encontrado"
        }
        
        db.splice(indiceParaApagar, 1)
        escreverArquivo(db)

        return "usuario apagado"
        
    } catch (error) {
        return error
    }
}

function filtroUsuariosPelasProfissoes(profissao: string) {
    try {
        let usuariosEncontrados: Usuario[] = []
        let dados = lerArquivo() as Usuario[]

        for (let i = 0; i < dados.length; i++){
            if (dados[i].profissao == profissao) {
                usuariosEncontrados.push(dados[i])
            }
        }

        if (usuariosEncontrados.length == 0) {
            return `Nossos usuarios não trabalham como ${profissao}`
        }

        return usuariosEncontrados
        
    } catch (error) {
        return error
    }
    
}