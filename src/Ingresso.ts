export default class Ingresso {
    public filme: string;
    public valor: number;
    protected desconto: number;

    constructor(filme: string, valor: number, desconto: number = 1) {
        this.filme = filme;
        this.valor = valor;
        this.desconto = desconto;
    }

    public getFilme(): string {
        return this.filme;
    }

    public setFilme(filme: string): void {
        this.filme = filme;
    }

    public getValor(): number {
        return this.valor;
    }

    public setValor(valor: number): void {
        this.valor = valor;
    }

    public getDesconto() {
        return this.desconto;
    }

    public setDesconto(desconto: number): void {
        this.desconto = desconto;
    }


    calcularValor(): number {
        return this.valor * this.desconto;
    }
}