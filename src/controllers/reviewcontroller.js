const reviewService = require("../services/reviewServices")
const APIerror = require("../utils/ApiError")

const createReview = async(req, res)=>{
    const review = await reviewService.createReview(     //it returns a promise thst's why we use await here
        req.body
    )

    res.status(201).json({
        success: "true",
        message: "Review created successfully",
        data: review
    })
}


const getAllReviews = async(req, res)=>{
    const reviews = await reviewService.getAllReviews();

    res.status(200).json({
        succes: true,
        count: reviews.length,
        data: reviews
    });
}

const getReviewById = async(req, res)=>{
    const review = await reviewService.getReviewById();

    res.status(200).json({
        success:true,
        data: review
    })
}

const updateReview = async(req, res)=>{
    const review = await reviewService.updateReview(
        req.params.id,
        req.body
    );

    res.status(200).json({
        success: true,
        message: "Review updated successfully",
        data: review
    })
}

const deleteReview = async(req, res)=>{
    await reviewService.deleteReview(req.params.id);

    res.status(200).json({
        success: true,
        message: "Review deleted successfully",
    })
}

module.exports = {createReview, getAllReviews, getReviewById, updateReview,
  deleteReview}