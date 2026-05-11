"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Cliente {
    constructor(name, cpf) {
        this.name = name;
        this.cpf = cpf;
    }
    getName() {
        return this.name;
    }
    setName(name) {
        this.name = name;
    }
    getCpf() {
        return this.cpf;
    }
    setCpf(cpf) {
        this.cpf = cpf;
    }
}
exports.default = Cliente;
