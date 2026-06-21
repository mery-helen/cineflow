import Database from "../Database";
import Cliente from "../model/Cliente";
import Ingresso from "../model/Ingresso";
import { CadeiraOcupadaException } from "../utils/CadeiraOcupadaException";

export default class VendaService {
  private database: Database;

  constructor(database: Database) {
    this.database = database;
  }

  private cadastrarCliente(cliente: Cliente): void {
    const clienteJaExiste = this.database.clientesCadastrados.some(
      (clienteBanco) => clienteBanco.getCpf() === cliente.getCpf(),
    );

    if (!clienteJaExiste) {
      this.database.clientesCadastrados.push(cliente);
    }
  }

  public finalizarVenda(ingresso: Ingresso): void {
    const cadeiraOcupada = this.database.ingressosVendidos.some(
      (ingressoNoBanco) => {
        return (
          ingressoNoBanco.getFilme() === ingresso.getFilme() &&
          ingressoNoBanco.getSala() === ingresso.getSala() &&
          ingressoNoBanco.getCadeira() === ingresso.getCadeira()
        );
      },
    );

    if (cadeiraOcupada) {
      throw new CadeiraOcupadaException(
        `A cadeira ${ingresso.getCadeira()} na sala ${ingresso.getSala()} já está ocupada para este filme!`,
      );
    }

    // dados salvos no banco se passou pela validação
    this.cadastrarCliente(ingresso.getCliente());
    this.database.ingressosVendidos.push(ingresso);
  }
}
