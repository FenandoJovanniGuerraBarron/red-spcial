const {findCommentById} = require('../comments/comments.controllers')

const ownerValidate = (req,res,next)=>{
    const userId = req.user.id
    const commentId = req.params.id
    findCommentById(commentId)
    .then(data=>{
        if (data.userId == userId) {
            next()
        }else{
            res.status(400).json({message: 'You do not have the permissions to perform this action'})
        }
    })
    .catch(err=> res.status(400).json({message: err.message}))
}

module.exports = ownerValidate