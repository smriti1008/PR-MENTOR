const getUserById = (req, res)=>{
    const{id} = req.params;

    res.status(200).json({
        success: true,
        data: {userId:id}
    })
}

const searchUsers = (req, res)=>{
    const{language} = req.query;

    res.status(200).json({
        success:true,
        data: {
            language: language || "all"
        }
    })
}

module.exports = {getUserById, searchUsers};