import IngressoService from "../service/IngressoService";
import VendaService from "../service/VendaService";
import Database from "../Database";
import { IngressoInteira, IngressoMeia } from "../model/IngressoMeia";
import { Sala } from "../model/Sala";
import { Cadeira } from "../model/Cadeira";
import Cliente from "../model/Cliente";
import { FilmesDisponiveis } from "../model/FilmesDisponiveis";

export default class MainController {
    public database: Database;
    private ingressoService: IngressoService;
    private vendaService: VendaService;

   constructor(database: Database, ingressoService: IngressoService, vendaService: VendaService) {
    this.database = database;
    this.ingressoService = ingressoService;
    this.vendaService = vendaService;
}

    public venderIngressoInteira(filme: FilmesDisponiveis, valor: number, sala: Sala, cadeira: Cadeira, cliente: Cliente): void {
        const ingresso = new IngressoInteira(filme, valor, sala, cadeira, cliente);
        this.vendaService.finalizarVenda(ingresso);
    }

    public venderIngressoMeia(filme: FilmesDisponiveis, valor: number, sala: Sala, cadeira: Cadeira, cliente: Cliente): void {
        const ingresso = new IngressoMeia(filme, valor, sala, cadeira, cliente);
        this.vendaService.finalizarVenda(ingresso);
    }

}