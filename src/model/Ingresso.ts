import { Cadeira } from "./Cadeira";
import Cliente from "./Cliente";
import { IComprovante } from "./IComprovante";
import { Sala } from "./Sala";
import { TipoIngresso } from "./TipoIngresso";
import { FilmesDisponiveis } from "./FilmesDisponiveis";

export default abstract class Ingresso implements IComprovante {
  public getFilme(): FilmesDisponiveis {
    return this.filme;
  }

  public getSala(): Sala {
    return this.sala;
  }

  public getCadeira(): Cadeira {
    return this.cadeira;
  }

  public getCliente(): Cliente {
    return this.cliente;
  }

  constructor(
    protected filme: FilmesDisponiveis,
    protected valor: number,
    protected tipo: TipoIngresso,
    protected sala: Sala,
    protected cadeira: Cadeira,
    protected cliente: Cliente,
  ) {}

  public abstract calcularPrecoFinal(): number;

public getResumo(): string {
    return `Filme: ${this.filme}\nTipo: ${this.tipo}\nSala: ${this.sala}\nCadeira: ${this.cadeira}\nCliente: ${this.cliente.getName()}\nValor: R$${this.calcularPrecoFinal().toFixed(2)}`;
}
}
