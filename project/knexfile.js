// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {

    development: {
        client: 'mysql',
        connection: {
            host: process.env.HOST,
            user:  process.env.USER,
            password: process.env.PASSWORD,
            database: 'desafio_back',
        },
        pool: { min: 0, max: 1, acquireTimeoutMillis: 6000000 },
    },

};
