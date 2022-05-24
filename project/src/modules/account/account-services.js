const AccountRepository = require('./account-repository');

class AccountServices {

    // buscar saldo
    async findBalance(OwnerSpec) {
        console.log(OwnerSpec);
        try {
            const saldo = await AccountRepository.findBalance(OwnerSpec);
            return saldo[0];
        } catch (error) {
            console.log(error);
            let error_ = new Error('Error ao cadastrar uma nova conta');
            error_.name = '500';
            return error_;
        }
    }

    // nova transferencia

    // async findBalance(OwnerSpec) {
    //     try {
    //         const saldo = await AccountRepository.findBalance(OwnerSpec);
    //         return saldo;
    //     } catch (error) {
    //         console.log(error);
    //         let error_ = new Error('Error ao cadastrar uma nova conta');
    //         error_.name = '500';
    //         return error_;
    //     }
    // }

}

module.exports = new AccountServices();
