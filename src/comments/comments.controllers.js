const uuid = require('uuid')

const Comments = require('../models/comments.models')
const Posts = require('../models/posts.models')

const findAllCommentsFromPost = async (postId) => {
    const data = await Comments.findAll({
        where: {
            postId: postId
        }
    })
    return data
}

const findCommentById = async (id) => {
    const data = await Comments.findOne({
        where: {
            id: id
        },
        include: {
            model: Posts
        }
    })
    return data
}

const createComments = async (obj) => {
    const data = await Comments.create({
        id: uuid.v4(),
        content: obj.content,
        userId: obj.userId,
        postId: obj.postId
    })
    return data
}

const updateComments = async (id, obj) => {
    const data = await Comments.update({
        where: {
            id: id
        }
    })
    return data[0]
}

const destroyComment = async (id) => {
    const data = await Comments.destroy({
        where: {
            id: id
        }
    })
    return data
}

module.exports = {
    findAllCommentsFromPost,
    createComments,
    updateComments,
    destroyComment,
    findCommentById
}