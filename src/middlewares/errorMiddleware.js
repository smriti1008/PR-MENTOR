const ApiError = require("../utils/ApiError")

const notFound = (req, res, next)=>{
    next(new ApiError(404, "Route not found"));
};

const errorHandler = (err, req, res, next)=>{

    if(res.headersSent){
        return next(err);
    }

    if (err.name === "ValidationError") {
        return res.status(400).json({
            success: false,
            message: "Database validation failed",
            errors: Object.values(err.errors).map(e => e.message)
        });
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

