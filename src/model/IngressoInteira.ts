import Cliente from "./Cliente";
import Ingresso from "./Ingresso";
import { Sala } from "./Sala";
import { Cadeira } from "./Cadeira";
import { TipoIngresso } from "./TipoIngresso";
import { FilmesDisponiveis } from "./FilmesDisponiveis";

export class IngressoInteira extends Ingresso {
    constructor(filme: FilmesDisponiveis, valor: number, sala: Sala, cadeira: Cadeira, cliente: Cliente) {
        super(filme, valor, TipoIngresso.INTEIRA, sala, cadeira, cliente);
    }

    public calcularPrecoFinal(): number {
        return this.valor;
    }
}