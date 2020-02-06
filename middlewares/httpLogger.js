const morgan = require('morgan');
const logger = require('../utils/logger');

class LoggerStream {
    write(message) {
        logger.info(message.substring(0, message.lastIndexOf('\n')));
    }
}

module.exports = morgan(
    'combined',
    { stream: new LoggerStream() }
); 