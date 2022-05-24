const { Router } = require('express');
const OwnerController = require('../modules/owner/owner-controller');

class OwnerRoutes {

    Route;

    constructor() {
        this.Route = Router();
        this.Routes();
    }

    Routes() {
        this.Route.post('/novocadastro', OwnerController.newOwner);
        this.Route.post('/login', OwnerController.Login);
    }
}

module.exports = new OwnerRoutes().Route;
