
exports.up = function (knex) {
    return knex.schema.createTable('CONTA', function (table) {
        table.increments('id').unsigned().primary();
        table.string('conta').notNullable();
        table.string('saldo').notNullable();
        table.boolean('active').notNullable().defaultTo(true);
        table.bigInteger('proprietario_id').unsigned()
            .index()
            .references('id')
            .inTable('PROPRIETARIO');
    });
};

exports.down = function (knex) {

};
