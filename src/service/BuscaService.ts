import Database from "../Database";
import Ingresso from "../model/Ingresso";

export default class BuscaService {
    private database: Database;

    constructor(database: Database) {
        this.database = database;
    }

    public buscarPorCpf(cpf: string): Ingresso[] {
        return this.database.ingressosVendidos.filter(
            (ingresso) => ingresso.getCliente().getCpf() === cpf,
        );
    }   
}