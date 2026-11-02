const Review = require("../models/reviewModel")
const ApiError = require("../utils/ApiError")

const createReview = async(data)=>{
    return await Review.create({
        title: data.title,
        description: data.description
    })
}

const getAllReviews = async()=>{
    return await Review.find().sort({createdAt: -1})
}


const getReviewById = async()=>{
    return await Review.findById(id)

    if(!review){
        throw new ApiError(404, "Review not found");
    }
    return review;
}

const updateReview = async(id, data)=>{
    const review = await Review.findByIdAndUpdate(
        id,
        {$set: data},
        {
            new:true,
            runValidators: true,
        }
    )
    if(!review){
        throw new ApiError(404, "Review not found")
    }
    return review;
}

const deleteReview = async()=>{
    const review = await Review.findByIdAndDelete(id);

    if(!review){
        throw new ApiError(404, "Review not found")
    }
    return review;
}

module.exports = {createReview, getAllReviews, getReviewById, updateReview, deleteReview}