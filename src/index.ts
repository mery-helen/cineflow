import Ingresso from "./Ingresso";
import IngressoMeia from "./IngressoMeia";

let ingresso = new Ingresso("Interestelar",40);
console.log("Ingresso normal: ", ingresso.calcularValor());

let ingressoMeia = new IngressoMeia("Duna",40);
console.log("Ingresso meia: ", ingressoMeia.calcularValor());