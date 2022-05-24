const { Router } = require('express');

class OwnerRoutes {

    Route;

    constructor() {
        this.Route = Router();
        this.Routes();
    }

    RoutesPublic(){}

    Routes() {
        this.Route.post('novocadastro', );
    }
}

module.exports = new OwnerRoutes().Route;
