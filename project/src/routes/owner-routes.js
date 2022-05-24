const { Router } = require('express');
const OwnerController = require('../modules/owner/owner-controller');

class OwnerRoutes {

    Route;

    constructor() {
        this.Route = Router();
        this.Routes();
    }

    RoutesPublic() { }

    Routes() {
        this.Route.post('/owner/novocadastro', OwnerController.newOwner);
        this.Route.post('/owner/login', OwnerController.Login);
    }
}

module.exports = new OwnerRoutes().Route;
