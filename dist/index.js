"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const IngressoService_1 = __importDefault(require("./service/IngressoService"));
const VendaService_1 = __importDefault(require("./service/VendaService"));
const MainController_1 = __importDefault(require("./control/MainController"));
const Database_1 = __importDefault(require("./Database"));
const FirstScreen_1 = __importDefault(require("./view/FirstScreen"));
const meuDatabase = new Database_1.default();
const serviceIngresso = new IngressoService_1.default(meuDatabase);
const serviceVenda = new VendaService_1.default(meuDatabase);
const controller = new MainController_1.default(meuDatabase, serviceIngresso, serviceVenda);
new FirstScreen_1.default(controller);
