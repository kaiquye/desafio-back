const ConnectMysql = require('../../config/connectionDatabaseMysql');


class OwnerRepository {

    async Create({ nome, email, telefone, password }) {
        return ConnectMysql.transaction(async (inner) => {
            // criando um novo "usuario" e uma nova conta relacionada a ele.
            const id = await ConnectMysql('PROPRIETARIO').transacting(inner).insert({
                NOME_PRO: nome, EMAIL_PRO: email, TELEFONE_PRO: telefone, PASSW_PRO: password
            }).returning('id');
            //nova conta
            await ConnectMysql('CONTA').transacting(inner).insert({
                proprietario_id: id,
                conta: Math.random(6),
                saldo: 0
            });
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

