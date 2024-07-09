const requestLogger = (req, res, next) => {
    const method = req.method;
    const url = req.url;
    const ip = req.ip;
    const timestamp = new Date().toISOString();

    console.log(`[${timestamp}] ${method} request to ${url} from IP: ${ip}`);

    next();
};

module.exports = requestLogger;
