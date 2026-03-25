"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Ingresso_1 = require("../Ingresso");
const IngressoMeia_1 = require("../IngressoMeia");
let ingresso = new Ingresso_1.default("Interestelar", 40);
console.log("Ingresso normal: ", ingresso.calcularValor());
let ingressoMeia = new IngressoMeia_1.default("Duna", 40);
console.log("Ingresso meia: ", ingressoMeia.calcularValor());
