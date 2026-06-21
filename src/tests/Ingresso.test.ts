import { expect, test } from "@jest/globals";
import Cliente from "../model/Cliente";
import { Sala } from "../model/Sala";
import { Cadeira } from "../model/Cadeira";
import { FilmesDisponiveis } from "../model/FilmesDisponiveis";
import { IngressoMeia } from "../model/IngressoMeia";
import { ComboPipocaDecorator } from "../model/ComboPipocaDecorator";

test("Deve cobrar apens metade do valor na meia entrada", () => {
    const cliente = new Cliente("Maria", "12345678900");
    const ingresso = new IngressoMeia(FilmesDisponiveis.INTERESTELAR, 40, Sala.IMAX, Cadeira.A1, cliente);

    expect(ingresso.calcularPrecoFinal()).toBe(20);
})

test("Deve adicionar o combo pipoca ao ingresso", () => {
    const cliente = new Cliente("João", "12345678900");
    const ingresso = new IngressoMeia(FilmesDisponiveis.POBRES_CRIATURAS, 40, Sala.STANDARD, Cadeira.A2, cliente);
    
    const comprovanteComCombo = new ComboPipocaDecorator(ingresso);

    expect(comprovanteComCombo.getResumo()).toContain("Combo Pipoca M");
});
