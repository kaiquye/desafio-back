const axios = require('axios').default;

exports.findAddress = async (zipcode) => {
    try {
        console.log(zipcode);
        const address = await axios.get(`https://viacep.com.br/ws/${zipcode}/json/`);
        return address.data;
    } catch (error) {
        return new Error('cep invalido').name = 404;
    }
};