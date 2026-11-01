const createReview = async({title, description})=>{
    const review = {
        title: title.trim(),
        description,
        status: "pending",
        createdAt: new Date().toISOString()
    }
    return review;
}

module.exports = {createReview};