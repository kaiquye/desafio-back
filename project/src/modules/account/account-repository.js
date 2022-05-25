const ConnectMysql = require('../../config/connectionDatabaseMysql');

/**
 * @create criar uma nova conta vinculada com o proprietario
 * @update
 * @delete
 * @findsaldo
 */


class AccountRepository {

    // buscar saldo
    async findBalance({ email }) {
        let sql = `
        select conta.conta, conta.proprietario_id as responsavel , format(saldo,2,'de_DE') as saldo from conta where proprietario_id = (select id from proprietario where email_pro = ? );
        `;
        return await ConnectMysql.raw(sql, [email]);
    }

    async exists({ email }) {
        const response = await ConnectMysql('CONTA').select('conta').where('EMAIL_PRO', email);
        if (response[0] === undefined) {
            return null;
        }
        return response[0];
    }

    // conta : numero da conta para qual o dinheiro vai ser transferido
    // email : email da conta no qual o dinheiro vai ser descontado
    // usando transition para garantir que os dados sejam transferidos. Em caso de erro o knex roda um rollback.
    async transfer({ email, conta, valor }) {
        return ConnectMysql.transaction(async (inner) => {
            let sql_desconto = `
            update conta set saldo = saldo - ? where conta.proprietario_id = 
            (select id from proprietario where proprietario.email_pro = ?);
            `;
            let sql_transf = `
            update conta set saldo = saldo + ? where conta = ? ;
            `;
            await ConnectMysql.raw(sql_desconto, [valor, email]).transacting(inner); // saldo descontado
            await ConnectMysql.raw(sql_transf, [valor, conta]).transacting(inner); // saldo transferido
        });
    }

    async findbyNumberAccount({ conta }) {
        const response = await ConnectMysql('CONTA').select('id').where('conta', conta);
        if (response[0] === undefined) {
            return null;
        }
        return response[0];
    }

}

module.exports = new AccountRepository();
