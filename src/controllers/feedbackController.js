const feedbackService = require("../services/feedbackService")

const createFeedback = async (req, res, next)=>{
    try{
    const {name, message} = req.body || {};
    if(typeof name!=="string" || typeof message !== "string" ||!name.trim() || !message.trim())
    {
        return res.status(400).json({
            success: "false",
            message: "Name and message must be non empty strings"
        })
    }
    const feedback = await feedbackService.createFeedback({
        name, 
        message
    })
    return res.status(201).json({
        success: true,
        message: "feedback recieved successfully",
        data: feedback
    })
}
catch(error){
    next(error);
}
}
module.exports = {createFeedback}