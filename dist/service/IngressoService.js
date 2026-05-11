"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class IngressoService {
    constructor(database) {
        this.database = database;
    }
    realizarVenda(p1) {
        if (typeof p1 === "string") {
            console.log('Venda realizada para o filme: ' + p1);
        }
        else {
            console.log('Vendendo ingresso objeto: ' + p1.getResumo());
        }
    }
}
exports.default = IngressoService;
