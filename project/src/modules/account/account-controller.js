const http = require('http');
const { dateTimeNew } = require('../../util/formatDate');
const AccountServices = require('./account-services');

class AccountController {

    // buscar saldo da conta
    async findBalnce(req, res) {
        try {
            // esse EMAIL é recebido pelo TOKEN de autenticação.
            const email = req.email;
            const infoCount = await AccountServices.findBalance({ email });
            if (infoCount instanceof Error) {
                return res.status(Number(infoCount)).json({
                    ok: false,
                    message: infoCount.message,
                    status_code: http.STATUS_CODES[infoCount.name]
                });
            }
            // informações da conta : saldo, numero da conta, id do responsavel.
            return res.status(200).json({
                ok: true,
                message: '## informações sobre sua conta ##',
                dados_conta: infoCount,
                dataConsulta: dateTimeNew(),
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

    async transfer(req, res) {
        try {
            if (!req.body.conta || !req.body.valor) {
                return res.status(400).json({
                    ok: false,
                    message: 'Preencha todos os campos. ## Conta : numero da conta destino, Valor : Valor a ser transferido. ##',
                    status_code: http.STATUS_CODES[400]
                });
            }
            req.body.email = req.email;
            const response = await AccountServices.transfer(req.body);
            if (response instanceof Error) {
                return res.status(Number(response.name)).json({
                    ok: false,
                    message: response.message,
                    status_code: http.STATUS_CODES[response.name]
                });
            }
            return res.status(201).json({
                ok: true,
                message: '#Transferência realizada com sucesso.#',
                specs: [
                    {
                        responsável: req.body.email,
                        data_Transferência: dateTimeNew(),
                        conta: req.body.conta,
                        valor: req.body.valor
                    }
                ],
                status_code: http.STATUS_CODES[201]
            });
        } catch (error) {
            return res.status(500).json({
                ok: false,
                message: 'Não foi possivel finalizar sua transferência. Entrar em contato com um administrador.',
                status_code: http.STATUS_CODES[500]
            });
        }
    }

}

module.exports = new AccountController();