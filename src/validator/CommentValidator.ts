import { body, param, query } from 'express-validator'
import Post from '../models/Post'
import Comment from '../models/Comments'

export class CommentValidator {
    static addComment() {
        return [body('content', 'Comment is required').isString(),
        param('id', 'Post id is required').custom((postId, { req }) => {
            return Post.findOne({ _id: postId }).then((post) => {
                if (post) {
                    req.post = post
                    return true;
                } else {
                    throw new Error('Post does not exist..!!')
                }
            })
        })]
    }

    static editComment() {
        return[body('content', 'Content is required').isString()]
    }
    static deleteComment() {
        return [param('id', 'Comment id is required').custom((commentId, { req }) => {
            return Comment.findOne({ _id: commentId }).then((comment) => {
                if (comment) {
                    req.comment = comment
                    return true;
                } else {
                    throw new Error ('Comment does not exist..!!')
                }
            })
        })]
    }
}