const Services = require('./account-repository');

class AccountServices {

    async newAccount(OwnerSpec) {
        try {
            const check = await Services.exists(OwnerSpec);
            if (check !== null) {
                let error = new Error('Já exite uma conta cadastrada com esse email');
                error.name = '409';
                return error;
            }
            await Services.create(OwnerSpec);
        } catch (error) {
            console.log(error);
            let error_ = new Error('Error ao cadastrar uma nova conta');
            error_.name = '500';
            return error_;
        }
    }


    async findBalance(OwnerSpec) {
        try {
            const saldo = await Services.findBalance(OwnerSpec);
            return saldo;
        } catch (error) {
            console.log(error);
            let error_ = new Error('Error ao cadastrar uma nova conta');
            error_.name = '500';
            return error_;
        }
    }

}

module.exports = new AccountServices();
