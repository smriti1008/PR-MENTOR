const getAbout = (req, res)=>{
    res.status(200).json({
        success: true,
        data:{
            name: "PR Mentor",
            version: "1.0.0",
            description: "AI-powered github pull request reviewer"
        }
    })
}

module.exports = {getAbout};