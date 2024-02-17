const CustomAPIError = require("../error/custom-error");
const errorHandlerMiddleware = async (err, req, res, next) => {
    if (err instanceof CustomAPIError) {
        return res.status(err.statusCode).json({
            status: err.statusCode,
            success: false,
            message: err.message,
            data: null
        });
    }
    return res.status(500).json({
        status: err.statusCode,
        success: false,
        message: err.message,
        data: null
    });
};
module.exports = errorHandlerMiddleware;
