const {findCommentById} = require('../comments/comments.controllers')

const ownerValidate = (req,res,next)=>{
    const userId = req.user.id
    const commentId = req.params.id
    findCommentById(commentId)
    .then(data=>{
        if (data.userId == userId) {
            next()
        }else{
            res.status(400).json({message: 'Only the owner can delete it'})
        }
    })
    .catch(err=> res.status(400).json({message: err.message}))
}

module.exports = ownerValidate