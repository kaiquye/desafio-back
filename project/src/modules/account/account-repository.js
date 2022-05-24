const ConnectMysql = require('../../config/connectionDatabaseMysql');

/**
 * @create criar uma nova conta vinculada com o proprietario
 * @update
 * @delete
 * @findsaldo
 */


class AccountRepository {

    async create({ idOwner, numeroDaConta }) {
        return await ConnectMysql('CONTA').insert({
            proprietario_id: idOwner,
            conta: numeroDaConta
        });
    }

    async findBalance({ email }) {
        return await ConnectMysql('CONTA').select('saldo', 'conta').where('EMAIL_PRO', email);
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
