import { escreverArquivo, lerArquivo } from "../01/scripts";

type Endereco = {
    cep: string;
    rua: string;
    complemento?: string;
    bairro: string;
    cidade: string;
};

type CadastroUsuario = {
    nome: string;
    email: string;
    cpf: string;
    profissao?: string;
    endereco: Endereco | null;
};

const user: CadastroUsuario = {
    nome: "dave",
    email: "email@email.com",
    cpf: "123123123123",
    profissao: "Programador",
    endereco: {
        cep: "123123",
        bairro: "world",
        cidade: "cidade",
        rua: "rua",
        complemento: "anudiasnudsa",
    },
};

const users: CadastroUsuario[] = [
    { ...user },
    {
        nome: "fsiaudfisa",
        email: "fdasfd@email.com",
        cpf: "123123123123",
        profissao: "sadffasfsd",
        endereco: {
            cep: "123123",
            bairro: "world",
            cidade: "cidade",
            rua: "rua",
            complemento: "anudiasnudsa",
        },
    },
];

const cadastroUsuario = (obj: CadastroUsuario | CadastroUsuario[]) => {
    escreverArquivo(obj);
};

cadastroUsuario(user);
// lerArquivo("./bd.json");
