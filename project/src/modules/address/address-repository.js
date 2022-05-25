const ConnectionMysql = require('../../config/connectionDatabaseMysql');

class AddressRepository {

    // buscar endereço cadastrado na conta ( vinculado )
    async find({ email }) {
        let subquety = `
        select * from endereco where proprietario_id 
        = (select id from proprietario where email_pro = ?)
        `;
        return ConnectionMysql.raw(subquety, [email]);
    }

}

module.exports = new AddressRepository();