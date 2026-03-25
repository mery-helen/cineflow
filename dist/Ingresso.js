"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Ingresso {
    constructor(filme, valor, desconto = 1) {
        this.filme = filme;
        this.valor = valor;
        this.desconto = desconto;
    }
    getFilme() {
        return this.filme;
    }
    setFilme(filme) {
        this.filme = filme;
    }
    getValor() {
        return this.valor;
    }
    setValor(valor) {
        this.valor = valor;
    }
    getDesconto() {
        return this.desconto;
    }
    setDesconto(desconto) {
        this.desconto = desconto;
    }
    calcularValor() {
        return this.valor * this.desconto;
    }
}
exports.default = Ingresso;
