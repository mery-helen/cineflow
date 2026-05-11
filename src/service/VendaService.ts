import Database from "../Database";
import Ingresso from "../model/Ingresso";
import Cliente from "../model/Cliente";

export default class VendaService {
    private database: Database;

    constructor(database: Database) {
        this.database = database;
    }

    
    public finalizarVenda(ingresso: Ingresso): void {
        const cadeiraOcupada = this.database.ingressosVendidos.some(ingressoNoBanco => {
            return ingressoNoBanco.getFilme() === ingresso.getFilme() &&
                   ingressoNoBanco.getSala() === ingresso.getSala() &&
                   ingressoNoBanco.getCadeira() === ingresso.getCadeira();
        });

        if (cadeiraOcupada) {
            throw new Error(`A cadeira ${ingresso.getCadeira()} na ${ingresso.getSala()} já está ocupada para este filme!`);
        }

       // dados salvos no banco se passou pela validação
        this.database.ingressosVendidos.push(ingresso);
        
        console.log("\n--- COMPROVANTE DE VENDA ---");
        console.log(ingresso.getResumo());
        console.log("----------------------------\n");
    }

}