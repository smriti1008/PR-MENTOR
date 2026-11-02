const validateReview = (req, res, next)=>{
    const {title, description} = req.body || {};

    if(typeof title !== "string" || typeof description !== "string" || title.trim().length === 0)
    {
        return res.status(400).json({
            success: false,
            message: "Valid title and description are required"
        })
    }

    if(title.length>200 || description.length>500){
        return res.status(400).json({
            success: false,
            message: "Review input exceeds allowed limit"
        })
    }
    next();
}

module.exports = validateReview;