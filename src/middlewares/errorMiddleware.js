const ApiError = require("../utils/ApiError")

const notFound = (req, res, next)=>{
    next(new ApiError(404, "Route not found"));
};

const errorHandler = (err, req, res, next)=>{

    if(res.headersSent){
        return next(err);
    }

    const isOperational = err instanceof ApiError;

    const statusCode = isOperational
    ? err.statusCode:500;
    console.log(err);

    res.status(statusCode).json({
        success: false,
        message: isOperational ? err.message : "Internal server error"
    })
}

module.exports = {notFound, errorHandler}