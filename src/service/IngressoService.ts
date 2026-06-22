import Database from "../Database";
import Ingresso from "../model/Ingresso";

export default class IngressoService {
  private database: Database;

  constructor(database: Database) {
    this.database = database;
  }

  //sobrecarga
  public realizarVenda(filme: string): void;
  public realizarVenda(ingresso: Ingresso): void;

  public realizarVenda(p1: string | Ingresso): void {
    if (typeof p1 === "string") {
      console.log(`[VENDA RÁPIDA] Filme: ${p1}`);
      console.log("Sistema pronto para registrar venda rápida.");
    } else {
      console.log("Vendendo ingresso objeto: " + p1.getResumo());
      console.log(`Cliente: ${p1.getCliente().getName()}`);
    }
  }
}
