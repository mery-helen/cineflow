"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Ingresso_1 = require("./Ingresso");
class IngressoMeia extends Ingresso_1.default {
    constructor(filme, valor) {
        super(filme, valor, 0.5);
    }
}
exports.default = IngressoMeia;
