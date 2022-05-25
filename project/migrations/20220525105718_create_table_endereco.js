
exports.up = function (knex) {
    return knex.schema.createTable('ENDERECO', function (table) {
        table.increments('id').unsigned().primary();
        table.string('cep').notNullable();
        table.string('logradouro');
        table.string('localidade');
        table.string('complemento');
        table.string('bairro');
        table.string('uf');
        table.bigInteger('proprietario_id').unsigned()
            .index()
            .references('id')
            .inTable('PROPRIETARIO');
    });
};

exports.down = function (knex) {

};
