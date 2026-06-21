import { IngressoDecorator } from "./IngressoDecorator";

export class ComboPipocaDecorator extends IngressoDecorator {
  private readonly valorCombo: number = 35.0;

  public getValorTotal(): number {
    return this.comprovanteBase.getValorTotal() + this.valorCombo;
  }

  public getResumo(): string {
    return (
      this.comprovanteBase.getResumo() +
      `\n[+] Combo Pipoca: Pipoca + Refrigerante + Chocolate (R$${this.valorCombo.toFixed(2)})` +
      `\nTotal: R$${this.getValorTotal().toFixed(2)}`
    );
  }
}
