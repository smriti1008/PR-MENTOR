const mongoose = require("mongoose");

const ApiError = require("../utils/ApiError");

const validateReviewId = (req, res, next)=>{
    const id = req.params.id;
    if(!mongoose.isObjectIdOrHexString(id)){
        return next(new ApiError(400, "Invalid review ID"))
    }
    next();
}

module.exports = validateReviewId;