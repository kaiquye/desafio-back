const { Router } = require('express');
const auth = require('../middleware/auth/index');

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
        this.Route.get('/account/meusaldo', );
    }
}

module.exports = new AccountRoutes().Route;
