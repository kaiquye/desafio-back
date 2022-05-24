const ConnectMysql = require('../../config/connectionDatabaseMysql');

/**
 * @create (nome, email, telefone, pass)  novo proprietario
 * @exists verifica se ja exite um pro cadastrado
 * @find buscar proprietario por id
 * @findAll buscar todos proprietarios
 * @delete apagar proprietario
 */

class OwnerRepository {

    async Create({ nome, email, telefone, password }) {
        return ConnectMysql('PROPRIETARIO').insert({
            NOME_PRO: nome, EMAIL_PRO: email, TELEFONE_PRO: telefone, PASSW_PRO: password
        });
    }

    async exists({ email, telefone }) {
        const response = await ConnectMysql('PROPRIETARIO').select('id').orWhere('EMAIL_PRO', email).orWhere('TELEFONE_PRO', telefone);
        if (response[0] === undefined) {
            return null;
        }
        return response[0];
    }

    async findbyemail({ email }) {
        const response = await ConnectMysql('PROPRIETARIO').select('PASSW_PRO').where('EMAIL_PRO', email);
        if (response[0] === undefined) {
            return null;
        }
        return response[0].PASSW_PRO;
    }
}

module.exports = new OwnerRepository();

