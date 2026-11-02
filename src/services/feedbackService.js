const createFeedback = async({name, message})=>{
    const feedback = {
        name: name.trim(),
        message: message.trim(),
        createdAt: new Date().toISOString()
    }
    return feedback;
}

module.exports = {createFeedback};