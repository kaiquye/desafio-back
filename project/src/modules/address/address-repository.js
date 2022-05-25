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

    async update({ bairro, localidade, complemento, uf, cep }, { email }) {
        let subquety = `
        update endereco set cep = ?, logradouro = ?, bairro = ?,  localidade = ? where proprietario_id = (select id from proprietario where email_pro = ?);
        `;
        return ConnectionMysql.raw(subquety, [bairro, localidade, complemento, uf, cep, email]);
    }


}

module.exports = new AddressRepository();