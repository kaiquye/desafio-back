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
                    status_code : http.STATUS_CODES[400]
                });
            }
        } catch (error) {

        }
    }
}

module.exports = new AddressController();
