const ConnectMysql = require('../../config/connectionDatabaseMysql');

/**
 * @create (nome, email, telefone, pass)  novo proprietario
 * @exists verifica se ja exite um pro cadastrado
 * @find buscar proprietario por id
 * @findAll buscar todos proprietarios
 * @delete apagar proprietario
 */

class OwnerRepository {

    async Create({ nome, email, telefone, pass }) {
        return ConnectMysql('PROPRIETARIO').insert({
            nome, email, telefone, pass
        });
    }

    async exists({ email, telefone }) {
        const response = await ConnectMysql('PROPRIETARIO').select('id').orWhere('EMAIL_PRO', email).orWhere('TELEFONE_PRO', telefone);
        if (response[0] === undefined) {
            return null;
        }
        return response[0];
    }

}

module.exports = new OwnerRepository();

