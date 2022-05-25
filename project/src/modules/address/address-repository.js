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

    async update({ bairro, logradouro, uf, cep }, { email }) {
        console.log( email);
        let subquety = `
        update endereco set cep = ?, logradouro = ?, bairro = ?,  localidade = ? where proprietario_id = (select id from proprietario where email_pro = ?);
        `;
        await ConnectionMysql.raw(subquety, [cep, logradouro, bairro, uf, email]);
    }


}

module.exports = new AddressRepository();