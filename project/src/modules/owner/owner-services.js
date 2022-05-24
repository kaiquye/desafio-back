const OwnerRepository = require('./owner-repository');
const bycrypt = require('bcrypt');
const auth = require('../../middleware/auth/index');

class OwnerServices {

    async newOwner(Owner) {
        try {
            const checkExists = await OwnerRepository.exists(Owner);
            if (checkExists !== null) {
                let error = new Error('Email/Telefone já em uso.');
                error.name = '409';
                return error;
            }
            const salt = bycrypt.genSaltSync(10);
            const crypt = bycrypt.hashSync(Owner.password, salt);
            Owner.password = crypt;
            await OwnerRepository.Create(Owner);
        } catch (error) {
            console.log(error);
            let error_ = new Error('Erro ao cadastrar um novo proprietario');
            error_.name = '500';
            return error_;
        }
    }


    async login(Owner) {
        try {
            const password = await OwnerRepository.findbyemail(Owner);
            if (password === null) {
                let error = new Error('Password/Email invalidos');
                error.name = '404';
                return error;
            }
            console.log(Owner.password, password);
            const match = await bycrypt.compare(Owner.password, password);
            console.log(match);
            if (!match) {
                let error = new Error('Password/Email invalidos');
                error.name = '404';
                return error;
            }
            // novo token
            return auth.NewToken(Owner);
        } catch (error) {
            console.log(error);
            let error_ = new Error('Error ao fazer login.');
            error_.name = '500';
            return error_;
        }
    }
}

module.exports = new OwnerServices();