const addressRepository = require('./address-repository');
const { findAddress } = require('../../util/ViaCep/api');

class AddressServices {

    // buscar endereço cadastrado na conta 
    async findAddress(spescOwner) {
        try {
            const address = await addressRepository.find(spescOwner);
            return address;
        } catch (error) {
            let error_ = new Error('Erro ao buscar endereço');
            error_.name = '500';
            return error_;
        }
    }

    async update(cep, spescOwner) {
        try {
            const addressViaCep = await findAddress(cep);
            if (addressViaCep instanceof Error) {
                return addressViaCep;
            }
            await addressRepository.update(addressViaCep, spescOwner);
        } catch (error) {
            console.log(error);
            let error_ = new Error('Erro ao atualizar endereço');
            error_.name = '500';
            return error_;
        }
    }

}

module.exports = new AddressServices();
