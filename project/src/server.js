const express = require('express');
const { ConfigCors } = require('./middleware/cors/index');
const { HelmetConfig } = require('./middleware/helmet/index');
const AccountRoutes = require('./routes/account-routes');
const OwnerRoutes = require('../src/routes/owner-routes');

class Server {

    App;

    constructor() {
        this.App = express();
        this.Middleware();
        this.Routes();
    }

    Middleware() {
        this.App.use(express.json());
        this.App.use(ConfigCors());
        this.App.use(HelmetConfig());
    }

    Routes() {
        this.App.use('/conta', AccountRoutes);
        this.App.use('/usuario', OwnerRoutes);
    }

}

module.exports = new Server().App;
