"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Ingresso {
    getFilme() {
        return this.filme;
    }
    getSala() {
        return this.sala;
    }
    getCadeira() {
        return this.cadeira;
    }
    constructor(filme, valor, tipo, sala, cadeira, cliente) {
        this.filme = filme;
        this.valor = valor;
        this.tipo = tipo;
        this.sala = sala;
        this.cadeira = cadeira;
        this.cliente = cliente;
    }
    getResumo() {
        return `Filme: ${this.filme} | ${this.sala} | Cadeira: ${this.cadeira} | Cliente: ${this.cliente.getName()} | Valor: R$${this.calcularPrecoFinal().toFixed(2)}`;
    }
}
exports.default = Ingresso;
