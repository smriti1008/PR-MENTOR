const validateFeedback = (req, res, next)=>{
    const {name, message} = req.body||{};
    if(typeof name!=="string" || typeof message!=="string" || !name.trim() || !message.trim())
    {
        return res.status(400).json({
            success: false,
            message: "Valid name and message are required"
        })
    }
    next();
}

module.exports = validateFeedback;