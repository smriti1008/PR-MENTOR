const mongoose = require("mongoose");

const reviewSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Title is required"],
        trim: true,
        maxlength: 200,
    },
    description: {
        type: String,
        required: [true, "Description is required"],
        trim: true,
        maxlength: 200,
    },
    status: {
        type: String,
        enum: ["pending", "completed", "failed"],
        default: "pending"
    }   
},
{
    timestamps: true
}
)

const Review = mongoose.model("Review", reviewSchema)
module.exports = Review;
