const jwt = require('jsonwebtoken');
const secret = 'knflerf3i3f8f5h3n59bds'

const verifyToken = async (req, res, next) => {
    const token = req.headers.authorization;

    if (!token) {
        return res.status(401).send('Authorization error: Token not provided');
    }

    try {
        const payload = jwt.verify(token, secret);
        next();
    } catch (err) {
        return res.status(401).send('Authorization error: Invalid token');
    }
};

module.exports = {secret, verifyToken}