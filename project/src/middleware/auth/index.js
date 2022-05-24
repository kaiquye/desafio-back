const jwt = require('jsonwebtoken');
const http = require('http');

class Auth {

    NewToken({ email, id }) {
        const token = jwt.sign({ email, id }, process.env.SECRET, { expiresIn: '2800s' });
        return { token };
    }

    Validade(req, res, next) {
        const Token = req.headers['authorization'];
        if (Token) {
            return res.status(404).json({
                ok: false,
                message: 'Invalid token',
                status_code: http.STATUS_CODES[404]
            });
        }
        try {
            const { data } = jwt.verify(Token, process.env.SECRET);
            if (data) return next();
        } catch (error) {
            return res.status(203).json({ ok: false, STATUS_CODES: http.STATUS_CODES['203'], message: 'Usuario não tem permisão. ' + error.message });
        }
    }
}

module.exports = new Auth();