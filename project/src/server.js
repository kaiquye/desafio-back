const express = require('express');
const swaggerUi = require('swagger-ui-express');
const swaggerDoc = require('./swagger.json');
const { ConfigCors } = require('./middleware/cors/index');
const { HelmetConfig } = require('./middleware/helmet/index');
const AccountRoutes = require('./routes/account-routes');
const OwnerRoutes = require('../src/routes/owner-routes');
const AddressRoutes = require('./routes/address-routes');

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
        this.App.use('/api-docs', swaggerUi.serve);
        this.App.get('/api-docs', swaggerUi.setup(swaggerDoc));
        this.App.use('/usuario', OwnerRoutes);
        this.App.use('/conta', AccountRoutes);
        this.App.use('/endereco', AddressRoutes);
    }

}

module.exports = new Server().App;
