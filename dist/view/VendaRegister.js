"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prompt_sync_1 = __importDefault(require("prompt-sync"));
const Cliente_1 = __importDefault(require("../model/Cliente"));
const Sala_1 = require("../model/Sala");
const Cadeira_1 = require("../model/Cadeira");
const FilmesDisponiveis_1 = require("../model/FilmesDisponiveis");
class VendaRegister {
    constructor(controller) {
        this.prompt = (0, prompt_sync_1.default)();
        this.controller = controller;
    }
    realizarVenda() {
        try {
            console.log("\n--- NOVO INGRESSO ---");
            const nome = this.prompt("Nome: ");
            const cpf = this.prompt("CPF: ");
            const cliente = new Cliente_1.default(nome, cpf);
            console.log("Escolha o filme:\n1. Interestelar\n2. Duna: Parte 2\n3. Pobres Criaturas");
            const opcaoFilme = this.prompt("> ");
            let filme;
            switch (opcaoFilme) {
                case "1":
                    filme = FilmesDisponiveis_1.FilmesDisponiveis.INTERESTELAR;
                    break;
                case "2":
                    filme = FilmesDisponiveis_1.FilmesDisponiveis.DUNA_PT2;
                    break;
                case "3":
                    filme = FilmesDisponiveis_1.FilmesDisponiveis.POBRES_CRIATURAS;
                    break;
                default:
                    throw new Error("Filme indisponível.");
            }
            console.log("Escolha a sala: 1- IMAX, 2- Premium, 3- Standard");
            const opcaoSala = this.prompt("> ");
            let sala;
            switch (opcaoSala) {
                case "1":
                    sala = Sala_1.Sala.IMAX;
                    break;
                case "2":
                    sala = Sala_1.Sala.PREMIUM;
                    break;
                case "3":
                    sala = Sala_1.Sala.STANDARD;
                    break;
                default:
                    throw new Error("Sala indisponível.");
            }
            console.log("Escolha a cadeira: 1- A1, 2- A2, 3- B1, 4- B2, 5- PCD");
            const opcaoCadeira = this.prompt("> ");
            let cadeira;
            switch (opcaoCadeira) {
                case "1":
                    cadeira = Cadeira_1.Cadeira.A1;
                    break;
                case "2":
                    cadeira = Cadeira_1.Cadeira.A2;
                    break;
                case "3":
                    cadeira = Cadeira_1.Cadeira.B1;
                    break;
                case "4":
                    cadeira = Cadeira_1.Cadeira.B2;
                    break;
                case "5":
                    cadeira = Cadeira_1.Cadeira.PCD;
                    break;
                default:
                    throw new Error("Cadeira inválida.");
            }
            const tipo = this.prompt("Tipo: 1. Inteira | 2. Meia: ");
            if (tipo === "1") {
                this.controller.venderIngressoInteira(filme, 40, sala, cadeira, cliente);
            }
            else if (tipo === "2") {
                this.controller.venderIngressoMeia(filme, 40, sala, cadeira, cliente);
            }
            else {
                throw new Error("Tipo de ingresso não reconhecido.");
            }
            console.log("Venda concluída com sucesso! Bom filme :)");
        }
        catch (error) {
            console.log(error.message + " Retornando ao menu principal...");
        }
    }
}
exports.default = VendaRegister;
