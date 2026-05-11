"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const promptSync = require("prompt-sync");
const VendaRegister_1 = __importDefault(require("./VendaRegister"));
class FirstScreen {
    constructor(controller) {
        this.prompt = promptSync();
        this.controller = controller;
        this.vendaRegister = new VendaRegister_1.default(controller);
        this.exibirMenu();
    }
    exibirMenu() {
        let rodando = true;
        while (rodando) {
            console.log("\n--- Bem vindo(a) ao CineFlow ---");
            console.log("1. Comprar ingresso");
            console.log("2. Ver filmes disponíveis");
            console.log("3. Sair");
            let opcao = parseInt(this.prompt("> "));
            switch (opcao) {
                case 1:
                    this.vendaRegister.realizarVenda();
                    break;
                case 2:
                    this.mostrarCatalogo();
                    break;
                case 3:
                    console.log("Obrigada por escolher o CineFlow! Volte sempre :)");
                    rodando = false;
                    break;
                default:
                    console.log("Opção inválida! Tente novamente.");
                    break;
            }
        }
    }
    mostrarCatalogo() {
        console.log("\nFILMES EM CARTAZ");
        console.log("1. Interestelar");
        console.log("2. Duna: Parte 2");
        console.log("3. Pobres Criaturas");
    }
}
exports.default = FirstScreen;
