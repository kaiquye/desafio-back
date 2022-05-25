const http = require('http');
const AddressServices = require('./address-services');

class AddressController {

    async find(req, res) {
        try {
            const adress = await AddressServices.findAddress(req.email);
            return res.status(200).json({
                ok: true,
                message: 'endereço cadastrado nesta conta',
                endereço: adress
            });
        } catch (error) {
            console.log(error);
            return res.status(500).json({
                ok: false,
                message: 'Erro ao cadastrar um novo proprietario',
                status_code: http.STATUS_CODES[500]
            });
        }
    }


    // atualizar endereço
    async update(req, res) {
        try {
            // so é possivel atualizar o cep, pois a api viacep busca o restante.
            if (!req.body.cep) {
                return res.status(400).json({
                    ok: true,
                    message: 'invalid args',
                    status_code: http.STATUS_CODES[400]
                });
            }
            const response = await AddressServices.update(req.body.cep, { email: req.email });
            if (response instanceof Error) {
                return res.status(Number(response.name)).json({
                    ok: false,
                    message: response.message,
                    status_code: http.STATUS_CODES[response.name]
                });
            }
            return res.status(200).json({
                ok: true,
                message: 'Endereço atualizado com sucesso.',
                status_code: http.STATUS_CODES[200]
            });
        } catch (error) {
            return res.status(500).json({
                ok: false,
                message: 'Erro ao atualizar seu endereço.',
                status_code: http.STATUS_CODES[500]
            });
        }
    }
}

module.exports = new AddressController();
