var logger = require('winston');

exports.get = function(req, res) {
    logger.info('Hello World!');
    res.status(200).json({status: 'OK', msg: 'Hello World!'});
};
