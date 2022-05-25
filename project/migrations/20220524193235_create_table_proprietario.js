
exports.up = function (knex) {
    return knex.schema.createTable('PROPRIETARIO', function (table) {
        table.increments('id').unsigned().primary();;
        table.string('NOME_PRO').notNullable();
        table.string('EMAIL_PRO').unique().notNullable();
        table.string('TELEFONE_PRO').unique().notNullable();
        table.text('PASSW_PRO').notNullable();
    });
};
exports.down = function (knex) {
};
