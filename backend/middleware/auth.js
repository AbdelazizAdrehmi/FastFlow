const config = require('../config');

module.exports = (rq, res, next) => {
    const token = rq.header('Authorization')?.replace('Bearer ', '');
    if (!token) return res.status(400).send('Access denied');

    try {
        const verfied = jwt.verify(token, config.JWT_SECRET);
        req.user = verified;
        next();
    } catch (err) {
        res.status(400).send('invalid token');
    }
};
