import { Cadeira } from "./Cadeira";
import Cliente from "./Cliente";
import { IComprovante } from "./IComprovante";
import { Sala } from "./Sala";
import { TipoIngresso } from "./TipoIngresso";

export default abstract class Ingresso implements IComprovante {

    public getFilme(): string {
        return this.filme;
    }

    public getSala(): Sala {
        return this.sala;
    }

    public getCadeira(): Cadeira {
        return this.cadeira;
    }

    constructor (
        protected filme: string,
        protected valor: number,
        protected tipo: TipoIngresso,
        protected sala: Sala,
        protected cadeira: Cadeira,
        protected cliente: Cliente
    ) {}

    public abstract calcularPrecoFinal(): number;

    public getResumo(): string {
        return `Filme: ${this.filme} | ${this.sala} | Cadeira: ${this.cadeira} | Cliente: ${this.cliente.getName()} | Valor: R$${this.calcularPrecoFinal().toFixed(2)}`;
    }
}