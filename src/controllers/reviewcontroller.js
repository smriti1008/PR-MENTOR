const reviewService = require("../services/reviewServices")

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

module.exports = {createReview};