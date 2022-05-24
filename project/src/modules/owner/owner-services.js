const OwnerRepository = require('./owner-repository');


class OwnerServices {

    async newOwner(Owner) {
        try {
            const checkExists = await OwnerRepository.exists(Owner);
            if (checkExists !== null) {
                let error = new Error('Email/Telefone já em uso.');
                error.name = '409';
                return error;
            }
            await OwnerRepository.Create(Owner);
        } catch (error) {
            let error_ = new Error('Erro ao cadastrar um novo proprietario');
            error_.name = '500';
            return error_;
        }
    }
}

module.exports = new OwnerServices();