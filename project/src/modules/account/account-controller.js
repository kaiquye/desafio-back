const http = require('http');
const AccountServices = require('./account-services');

class AccountController {

    // buscar saldo da conta
    async findBalnce(req, res) {
        try {
            // esse EMAIL e recebido pelo TOKEN de autenticação.
            const email = req.email;
            const infoCount = await AccountServices.findBalance({ email });
            if (infoCount instanceof Error) {
                return res.status(Number(infoCount)).json({
                    ok: false,
                    message: infoCount.message,
                    status_code: http.STATUS_CODES[infoCount.name]
                });
            }
            // informarcoes da conta : saldo, numero da conta.
            return res.status(200).json({
                ok: true,
                message: '## informações sobre sua conta ##',
                dados_conta: infoCount,
                status_code: http.STATUS_CODES[200]
            });
        } catch (error) {
            return res.status(500).json({
                ok: false,
                message: 'Não foi possivel buscar saldo. Entrar em contato com um administrador.',
                status_code: http.STATUS_CODES[500]
            });
        }
    }

}

module.exports = new AccountController();