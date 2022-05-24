const http = require('http');
const OwnerServices = require('./owner-services');


class OwnerController {

    async newOwner(req, res) {
        try {
            if (!req.body.nome || !req.body.telefone || !req.body.email || !req.body.password) {
                return res.status(400).json({
                    ok: false,
                    message: 'Preencha todos os campos: nome, telefone, email, passowrd',
                    status_code: http.STATUS_CODES[400]
                });
            }
            const response = await OwnerServices(req.body);
            if (response instanceof Error) {
                return res.status(Number(response.name)).json({
                    ok: false,
                    message: response.message,
                    status_code: http.STATUS_CODES[response.name]
                });
            }
            return res.status(201).json({
                ok: true,
                message: 'Proprietario criado com sucesso.',
                status_code: http.STATUS_CODES[201]
            });
        } catch (error) {
            return res.status(500).json({
                ok: false,
                message: 'Erro ao cadastrar um novo proprietario',
                status_code: http.STATUS_CODES[500]
            });
        }
    }

}

module.exports = new OwnerController();