"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.IngressoMeia = exports.IngressoInteira = void 0;
const Ingresso_1 = __importDefault(require("./Ingresso"));
const TipoIngresso_1 = require("./TipoIngresso");
class IngressoInteira extends Ingresso_1.default {
    constructor(filme, valor, sala, cadeira, cliente) {
        super(filme, valor, TipoIngresso_1.TipoIngresso.INTEIRA, sala, cadeira, cliente);
    }
    calcularPrecoFinal() {
        return this.valor;
    }
}
exports.IngressoInteira = IngressoInteira;
class IngressoMeia extends Ingresso_1.default {
    constructor(filme, valor, sala, cadeira, cliente) {
        super(filme, valor, TipoIngresso_1.TipoIngresso.MEIA, sala, cadeira, cliente);
    }
    calcularPrecoFinal() {
        return this.valor * 0.5;
    }
}
exports.IngressoMeia = IngressoMeia;
