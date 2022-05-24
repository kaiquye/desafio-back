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

}

module.exports = new AccountRepository();
