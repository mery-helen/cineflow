import { IngressoDecorator } from "./IngressoDecorator";

export class ComboPipocaDecorator extends IngressoDecorator {

    public getResumo(): string {
        return this.comprovanteBase.getResumo() + "\n[+] Adicional: Combo Pipoca M (R$25.00)";
    }
}   
