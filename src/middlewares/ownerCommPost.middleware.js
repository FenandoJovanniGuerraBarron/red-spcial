const {findCommentById} = require('../comments/comments.controllers')


const ownerCommPost = (req,res,next)=>{
    const commentId = req.params.comment_id
    const userId = req.user.id

    findCommentById(commentId)
    .then(data=>{
        if (data.userId == userId || data.post.userId == userId) {
            next()
        }else{
            res.status(400).json({message: 'You do not have the permissions to perform this action'})
        }
    })
    .catch(err=> res.status(400).json({message: err.message}))
} 

module.exports= ownerCommPost