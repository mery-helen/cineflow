import { expect, test } from "@jest/globals";
import Cliente from "../model/Cliente";
import BuscaService from "../service/BuscaService";
import Database from "../Database";
import { Sala } from "../model/Sala";
import { Cadeira } from "../model/Cadeira";
import { FilmesDisponiveis } from "../model/FilmesDisponiveis";
import { IngressoMeia } from "../model/IngressoMeia";
import { IngressoInteira } from "../model/IngressoInteira";
import { ComboPipocaDecorator } from "../model/ComboPipocaDecorator";
import { CadeiraOcupadaException } from "../utils/CadeiraOcupadaException";
import VendaService from "../service/VendaService";

test("Deve cobrar apenas metade do valor na meia entrada", () => {
    const cliente = new Cliente("Maria", "12345678900");
    const ingresso = new IngressoMeia(FilmesDisponiveis.INTERESTELAR, 40, Sala.IMAX, Cadeira.A1, cliente);

    expect(ingresso.calcularPrecoFinal()).toBe(20);
})

test("Deve cobrar o valor integral na entrada inteira", () => {
    const cliente = new Cliente("Pedro","98765432100");
    const ingresso = new IngressoInteira(FilmesDisponiveis.DUNA_PT2, 40, Sala.PREMIUM, Cadeira.B1, cliente);
    expect(ingresso.calcularPrecoFinal()).toBe(40);
});

test("Deve adicionar o combo pipoca ao ingresso", () => {
    const cliente = new Cliente("João", "12345678900");
    const ingresso = new IngressoMeia(FilmesDisponiveis.POBRES_CRIATURAS, 40, Sala.STANDARD, Cadeira.A2, cliente);
    
    const comprovanteComCombo = new ComboPipocaDecorator(ingresso);

    expect(comprovanteComCombo.getResumo()).toContain("Combo Pipoca");
});


test ("Deve retornar ingressos vendidos para um CPF específico", () => {
    const database = new Database();
    const cliente = new Cliente("Lucas", "22222222222");
    const ingresso  = new IngressoInteira(FilmesDisponiveis.INTERESTELAR, 40, Sala.IMAX, Cadeira.PCD, cliente);

    database.ingressosVendidos.push(ingresso);

    const buscaService = new BuscaService(database);
    const ingressosEncontrados = buscaService.buscarPorCpf("22222222222");
    expect(ingressosEncontrados.length).toBe(1);
    expect(ingressosEncontrados[0].getCliente().getName()).toBe("Lucas");
});


test ("Deve lançar exceção quando a cadeira já estiver ocupada", () => {
  const database = new Database();
  const cliente1 = new Cliente("Millena", "33333333333");
  const cliente2 = new Cliente("Mery", "44444444444");

  const ingresso1 = new IngressoInteira(FilmesDisponiveis.DUNA_PT2, 40, Sala.PREMIUM, Cadeira.B2, cliente1);
  database.ingressosVendidos.push(ingresso1);

  const vendaService = new VendaService(database);

  const ingresso2 = new IngressoInteira(FilmesDisponiveis.DUNA_PT2, 40, Sala.PREMIUM, Cadeira.B2, cliente2);
    expect(() => vendaService.finalizarVenda(ingresso2)).toThrow(CadeiraOcupadaException);
});

