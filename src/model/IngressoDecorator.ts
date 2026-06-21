import { IComprovante } from "./IComprovante";

export abstract class IngressoDecorator implements IComprovante {

    protected comprovanteBase: IComprovante;

    constructor(comprovanteBase: IComprovante) {
        this.comprovanteBase = comprovanteBase;
    }

    public getResumo(): string {
        return this.comprovanteBase.getResumo();
    }
}

