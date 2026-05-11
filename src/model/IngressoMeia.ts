import Cliente from "./Cliente";
import Ingresso from "./Ingresso";
import { Sala } from "./Sala";
import { Cadeira } from "./Cadeira";
import { TipoIngresso } from "./TipoIngresso";

export class IngressoInteira extends Ingresso {
    constructor(filme: string, valor: number, sala: Sala, cadeira: Cadeira, cliente: Cliente) {
        super(filme, valor, TipoIngresso.INTEIRA, sala, cadeira, cliente);
    }

    public calcularPrecoFinal(): number {
        return this.valor;
    }
}

export class IngressoMeia extends Ingresso {
    constructor(filme: string, valor: number, sala: Sala, cadeira: Cadeira, cliente: Cliente) {
        super(filme, valor, TipoIngresso.MEIA, sala, cadeira, cliente);
    }

    public calcularPrecoFinal(): number {
        return this.valor * 0.5;
    }
}