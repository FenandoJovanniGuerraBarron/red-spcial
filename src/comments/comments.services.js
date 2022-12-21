const commentsControllers = require('./comments.controllers')

const getAllCommentsByPost = (req, res) => {
    const id = req.params.id
    commentsControllers.findAllCommentsFromPost(id)
        .then(data => {
            if (data) {
                res.status(200).json({ data })
            } else {
                res.satatus(404).json({ message: 'Invalid Id' })
            }
        })
        .catch(err => res.status(400).json({ message: err.message }))
}



const getCommentById = (req, res) => {
    const id = req.params.comment_id
    commentsControllers.findCommentById(id)
        .then(data => {
            if (data) {
                res.status(200).json(data)
            } else {
                res.status(404).json({ message: 'Invalid ID' })
            }
        })
        .catch(err => res.status(400).json({ message: err.message }))
}

const postComment = (req, res) => {
    const userId = req.user.id
    const postId = req.params.id
    const { content } = req.body
    commentsControllers.createComments({ userId, postId, content })
        .then(data => {
            res.status(201).json(data)
        })
        .catch(err => res.status(400).json({ message: err.message }))
}

const patchComment = (req, res) => {
    const { content } = req.body
    const id = req.params.id
    commentsControllers.updateComments(id, { content })
        .then(data => {
            if (data) {
                res.status(200).json({ message: `Comment with id: ${id} edited successfully by the user with id: ${userId}` })
            } else {
                res.status(400).json({ message: 'Comment not available' })
            }
        })
        .catch(err => res.status(400).json({ message: err.message }))
}


const deleteComment = (req, res) => {
    const id = req.params.comment_id
    commentsControllers.destroyComment(id)
        .then(() => {
            if (data) {
                res.status(204).json()
            } else {
                res.status(404).json({ message: 'Invalid Id' })
            }
        })
        .catch(err => {
            res.status(400).json({ message: err.message })
        })
}

module.exports = {
    getAllCommentsByPost,
    patchComment,
    postComment,
    deleteComment,
    getCommentById
}






//Mantenia un sistema inter de inverntarios