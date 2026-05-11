"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const IngressoMeia_1 = require("../model/IngressoMeia");
class MainController {
    constructor(database, ingressoService, vendaService) {
        this.database = database;
        this.ingressoService = ingressoService;
        this.vendaService = vendaService;
    }
    venderIngressoInteira(filme, valor, sala, cadeira, cliente) {
        const ingresso = new IngressoMeia_1.IngressoInteira(filme, valor, sala, cadeira, cliente);
        this.vendaService.finalizarVenda(ingresso);
    }
    venderIngressoMeia(filme, valor, sala, cadeira, cliente) {
        const ingresso = new IngressoMeia_1.IngressoMeia(filme, valor, sala, cadeira, cliente);
        this.vendaService.finalizarVenda(ingresso);
    }
}
exports.default = MainController;
