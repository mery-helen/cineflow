
import IngressoService from "./service/IngressoService";
import VendaService from "./service/VendaService"; 
import MainController from "./control/MainController";
import Database from "./Database";
import FirstScreen from "./view/FirstScreen";

const meuDatabase = new Database()
;
const serviceIngresso = new IngressoService(meuDatabase);
const serviceVenda = new VendaService(meuDatabase);


const controller = new MainController(meuDatabase, serviceIngresso, serviceVenda);

new FirstScreen(controller);