const AccountRepository = require('./account-repository');

class AccountServices {

    // buscar saldo
    async findBalance(OwnerSpec) {
        console.log(OwnerSpec);
        try {
            const saldo = await AccountRepository.findBalance(OwnerSpec);
            return saldo[0];
        } catch (error) {
            let error_ = new Error('Error ao cadastrar uma nova conta');
            error_.name = '500';
            return error_;
        }
    }

    // nova transferencia

    async transfer(specAccount) {
        try {
            const existsAccount = await AccountRepository.findbyNumberAccount(specAccount);
            console.log(existsAccount);
            if (existsAccount === null) {
                let error = new Error('Numero da conta invalido/Conta não encontrada.');
                error.name = '404';
                return error;
            }
            const checkBalance = await AccountRepository.findBalance(specAccount);
            if (checkBalance[0][0].saldo < specAccount.value) {
                let error = new Error('saldo insuficiente.');
                error.name = '400';
                return error;
            }
            await AccountRepository.transfer(specAccount);
        } catch (error) {
            console.log(error);
            let error_ = new Error('Error ao cadastrar uma nova conta');
            error_.name = '500';
            return error_;
        }
    }

    async desables(specsOwner) {
        try {
            const spescAccount = await AccountRepository.desableAccount(specsOwner);
        } catch (error) {
            console.log(error);
            let error_ = new Error('Error ao cadastrar uma nova conta');
            error_.name = '500';
            return error_;
        }
    }


}

module.exports = new AccountServices();
