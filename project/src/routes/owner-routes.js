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
        this.Route.post('novocadastro', OwnerController.newOwner);
    }
}

module.exports = new OwnerRoutes().Route;
