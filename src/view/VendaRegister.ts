import promptSync = require("prompt-sync");
import MainController from "../control/MainController";
import { Sala } from "../model/Sala";
import { Cadeira } from "../model/Cadeira";
import { FilmesDisponiveis } from "../model/FilmesDisponiveis";
import { IComprovante } from "../model/IComprovante";
import { ImpressaoGenerica } from "../utils/ImpressaoGenerica";
import { CadeiraOcupadaException } from "../utils/CadeiraOcupadaException";

export default class VendaRegister {
  private prompt = promptSync();
  private controller: MainController;

  constructor(controller: MainController) {
    this.controller = controller;
  }

  public realizarVenda(): void {
    try {
      console.log("\n--- NOVO INGRESSO ---");

      const nome = this.prompt("Nome: ");
      const cpf = this.prompt("CPF: ");
      const cliente = this.controller.getNewCliente(nome, cpf);

      console.log(
        "Escolha o filme:\n1. Interestelar\n2. Duna: Parte 2\n3. Pobres Criaturas",
      );
      const opcaoFilme = this.prompt("> ");
      let filme: FilmesDisponiveis;

      switch (opcaoFilme) {
        case "1":
          filme = FilmesDisponiveis.INTERESTELAR;
          break;
        case "2":
          filme = FilmesDisponiveis.DUNA_PT2;
          break;
        case "3":
          filme = FilmesDisponiveis.POBRES_CRIATURAS;
          break;
        default:
          throw new Error("Filme indisponível.");
      }

      console.log("Escolha a sala: 1- IMAX, 2- Premium, 3- Standard");
      const opcaoSala = this.prompt("> ");
      let sala: Sala;

      switch (opcaoSala) {
        case "1":
          sala = Sala.IMAX;
          break;
        case "2":
          sala = Sala.PREMIUM;
          break;
        case "3":
          sala = Sala.STANDARD;
          break;
        default:
          throw new Error("Sala indisponível.");
      }

      console.log("Escolha a cadeira: 1- A1, 2- A2, 3- B1, 4- B2, 5- PCD");
      const opcaoCadeira = this.prompt("> ");
      let cadeira: Cadeira;

      switch (opcaoCadeira) {
        case "1":
          cadeira = Cadeira.A1;
          break;
        case "2":
          cadeira = Cadeira.A2;
          break;
        case "3":
          cadeira = Cadeira.B1;
          break;
        case "4":
          cadeira = Cadeira.B2;
          break;
        case "5":
          cadeira = Cadeira.PCD;
          break;
        default:
          throw new Error("Cadeira inválida.");
      }

      console.log("Tipo de ingresso: 1.Inteira | 2.Meia");
      const tipo = this.prompt("> ");
      let comprovanteFinal: IComprovante;

      switch (tipo) {
        case "1":
          comprovanteFinal = this.controller.venderIngressoInteira(filme, 40, sala, cadeira, cliente);
          break;
        case "2":
          comprovanteFinal = this.controller.venderIngressoMeia(filme, 40, sala, cadeira, cliente);
          break;
        default:
          throw new Error("Tipo de ingresso inválido.");
      }

      console.log("Deseja adicionar o Combo Pipoca (Pipoca + Refrigerante + Chocolate) por R$35.00? (s/n)");
      const opcaoCombo = this.prompt("> ");

      switch (opcaoCombo.toLowerCase()) {
        case "s":
          comprovanteFinal = this.controller.adicionarComboPipoca(comprovanteFinal);
          break;
        case "n":
          break;
        default:
          console.warn("Opção inválida. Prosseguindo sem o combo.");
      }

      const impressao = new ImpressaoGenerica<IComprovante>();

      impressao.imprimirComprovante(comprovanteFinal);

      console.log("Venda concluída com sucesso! Bom filme :)");

    } catch (error: any) {
      if (error instanceof CadeiraOcupadaException) {
        console.error("Erro: " + error.message);
      } else {
        console.error("Erro de validação: " + error.message);
      }

      console.log("Retornando ao menu principal...");
    }
  }
}
