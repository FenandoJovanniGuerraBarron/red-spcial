const router = require('express').Router()

const postServices = require('./posts.services')
const likeServices = require('../likes/likes.services')
const commentServices = require('../comments/comments.services')
const passportJWT= require('../middlewares/auth.middleware')
const ownerValidate = require('../middlewares/owner.middleware')
const ownerCommPost=require('../middlewares/ownerCommPost.middleware')

router.route('/')
.get(postServices.getAllPosts)
.post(passportJWT.authenticate('jwt',{session:false}),postServices.postNewPost)

router.route('/:id')
.get(postServices.getPostById)
.patch(passportJWT.authenticate('jwt',{session:false}),postServices.patchPost)
.delete(passportJWT.authenticate('jwt',{session:false}),ownerValidate,postServices.deletePost)

//*Likes

router.route('/:id/likes')
.get(likeServices.getAllLikesByPost)
.post(passportJWT.authenticate('jwt',{session:false}),likeServices.postLike)

//*Comments

router.route('/:id/comments')
.get(commentServices.getAllCommentsByPost)
.post(passportJWT.authenticate('jwt',{session:false}),commentServices.postComment)

router.route('/:id/comments/:comment_id')
.get(commentServices.getCommentById)
.patch(passportJWT.authenticate('jwt',{session:false}),ownerValidate,commentServices.patchComment)
.delete(passportJWT.authenticate('jwt', {session: false}), ownerCommPost, commentServices.deleteComment)

module.exports = router