const { Router } = require('express');
const auth = require('../middleware/auth/index');
const Controller = require('../modules/address/address-controller');

class AddressRoutes {

    Route;

    constructor() {
        this.Route = Router();
        this.Middleware();
        this.Routes();
    }

    Middleware() {
        // validando se o usuario esta logado
        this.Route.use(auth.Validade);
    }

    Routes() {
        this.Route.get('/buscarenderecocadastrado', Controller.find);
        this.Route.get('/atualizarendereco', Controller.update);
    }
}

module.exports = new AddressRoutes().Route;
