// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {

    development: {
        client: 'mysql',
        connection: {
            host: 'localhost',
            user: 'root',
            password: '1234',
            database: 'desafio_back',
        },
        pool: { min: 0, max: 1, acquireTimeoutMillis: 6000000 },
    },

};