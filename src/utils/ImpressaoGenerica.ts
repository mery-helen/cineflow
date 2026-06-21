import {IComprovante} from "../model/IComprovante";

export class ImpressaoGenerica<T extends IComprovante> {
    public imprimirComprovante(item: T): void {
        console.log("\n===================================");
        console.log("          CINEFLOW TICKET          ");
        console.log("===================================");
        console.log(item.getResumo());
        console.log("===================================\n");
    }
}