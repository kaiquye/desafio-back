const { Router } = require('express');
const auth = require('../middleware/auth/index');
const Controller = require('../modules/account/account-controller');

class AccountRoutes {

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
        this.Route.get('/meusaldo', Controller.findBalance);
        this.Route.post('/transferir', Controller.transfer);
        this.Route.post('/desativarconta', Controller.disables);
    }
}

module.exports = new AccountRoutes().Route;
