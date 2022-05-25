const addressRepository = require('./address-repository');

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

}

module.exports = new AddressServices();
