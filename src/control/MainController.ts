import IngressoService from "../service/IngressoService";
import VendaService from "../service/VendaService";
import Database from "../Database";
import Ingresso from "../model/Ingresso";
import Cliente from "../model/Cliente";
import { IngressoInteira } from "../model/IngressoInteira";
import { IngressoMeia } from "../model/IngressoMeia";
import { Sala } from "../model/Sala";
import { Cadeira } from "../model/Cadeira";
import { FilmesDisponiveis } from "../model/FilmesDisponiveis";
import { IComprovante } from "../model/IComprovante";
import { ComboPipocaDecorator } from "../model/ComboPipocaDecorator";

export default class MainController {
    
    private ingressoService: IngressoService;
    private vendaService: VendaService;

   constructor(database: Database, ingressoService: IngressoService, vendaService: VendaService) {
    this.ingressoService = ingressoService;
    this.vendaService = vendaService;
}

    public getNewCliente(nome: string, cpf: string): Cliente {
        return new Cliente(nome, cpf);
    }

    public venderIngressoInteira(filme: FilmesDisponiveis, valor: number, sala: Sala, cadeira: Cadeira, cliente: Cliente): Ingresso {
        const ingresso = new IngressoInteira(filme, valor, sala, cadeira, cliente);
        this.ingressoService.realizarVenda(ingresso);
        this.vendaService.finalizarVenda(ingresso);
        return ingresso;
    }

    public venderIngressoMeia(filme: FilmesDisponiveis, valor: number, sala: Sala, cadeira: Cadeira, cliente: Cliente): Ingresso {
        const ingresso = new IngressoMeia(filme, valor, sala, cadeira, cliente);
        this.ingressoService.realizarVenda(ingresso);
        this.vendaService.finalizarVenda(ingresso);
        return ingresso;
    }

    //aplicação do decorator para a view
    public adicionarComboPipoca(comprovante: IComprovante): IComprovante {
        return new ComboPipocaDecorator(comprovante);
    }

}