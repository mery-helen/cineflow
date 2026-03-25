import Ingresso from "./Ingresso";

export default class IngressoMeia extends Ingresso {
    constructor (filme: string, valor: number) {
        super(filme, valor, 0.5); //chama construtor da classe mãe
    }
}