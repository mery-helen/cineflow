import promptSync = require("prompt-sync");
import MainController from "../control/MainController";
import VendaRegister from "./VendaRegister";

export default class FirstScreen {
  private prompt = promptSync();
  private controller: MainController;
  private vendaRegister: VendaRegister;

  constructor(controller: MainController) {
    this.controller = controller;
    this.vendaRegister = new VendaRegister(controller);
    this.exibirMenu();
  }

  public exibirMenu(): void {
    let rodando = true;
    while (rodando) {
      console.log("\n--- Bem vindo(a) ao CineFlow ---");
      console.log("1. Comprar ingresso");
      console.log("2. Ver filmes disponíveis");
      console.log("3. Consultar meus ingressos");
      console.log("4. Sair");
      let opcao = parseInt(this.prompt("> "));

      switch (opcao) {
        case 1:
          this.vendaRegister.realizarVenda();
          break;
        case 2:
          this.mostrarCatalogo();
          break;
        case 3:
          this.consultarIngressos();
          break;
        case 4:
          console.log("Obrigada por escolher o CineFlow! Volte sempre :)");
          rodando = false;
          break;
        default:
          console.log("Opção inválida! Tente novamente.");
          break;
      }
    }
  }

  private mostrarCatalogo(): void {
    console.log("\nFILMES EM CARTAZ");
    console.log("1. Interestelar");
    console.log("2. Duna: Parte 2");
    console.log("3. Pobres Criaturas");
  }

  private consultarIngressos(): void {
    const cpf = this.prompt("Digite seu CPF para realizar uma consulta:");
    const ingressos = this.controller.buscarIngressosPorCpf(cpf);

    if (ingressos.length === 0) {
      console.log("Nenhum ingresso encontrado para este CPF.");
      return;
    }

    console.log(`\n${ingressos.length} ingresso(s) encontrado(s):\n`);
    ingressos.forEach((ingresso, index) => {
      console.log(`--- Ingresso ${index + 1} ---`);
      console.log(ingresso.getResumo());
    });
  }
}
