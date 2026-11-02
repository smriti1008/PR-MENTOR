const mongoose = require ('mongoose');

const ApiError = require('../utils/ApiError');

const validateReviewUpdate = (req, res, next)=>{

    const data = req.body;

   if ( !data || typeof data !== "object" || Array.isArray(data)) {
    return next(new ApiError(400, "Invalid request body"));
    }
 const allowedFields = ["title", "description"];

  const fields = Object.keys(data);

  if (
    fields.length === 0 ||
    fields.some(field => !allowedFields.includes(field))
  ) {
    return next(new ApiError(400, "Invalid update fields"));
  }

  if (
    data.title !== undefined &&
    (
      typeof data.title !== "string" ||
      !data.title.trim() ||
      data.title.length > 200
    )
  ) {
    return next(new ApiError(400, "Invalid title"));
  }

  if (
    data.description !== undefined &&
    (
      typeof data.description !== "string" ||
      !data.description.trim() ||
      data.description.length > 5000
    )
  ) {
    return next(new ApiError(400, "Invalid description"));
  }

  next();
};

module.exports = validateReviewUpdate;
