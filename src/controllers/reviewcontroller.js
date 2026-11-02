const reviewService = require("../services/reviewServices")
const APIerror = require("../utils/ApiError")

const createReview = async(req, res)=>{
    const review = await reviewService.createReview(     //it returns a promise thst's why we use await here
        req.body
    )

    res.status(200).json({
        success: "true",
        message: "Review preview generated successfully",
        data: review
    })
}
const getReviewById = (req, res)=>{
    const {id} = req.params;
    throw new APIerror(404, "Review not found");
}

module.exports = {createReview, getReviewById};