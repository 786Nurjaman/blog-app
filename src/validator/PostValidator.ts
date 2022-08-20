import {body,param,query} from 'express-validator'
import Post from '../models/Post'

export class PostValidator{
    static addPost() {
        return[body('content','Post content is required').isString()]
    }
    static getPostById() {
        return [param('id', 'Post id is required').custom((postId,{req}) => {
            return Post.findOne({ _id: postId }).populate('comments').then((post) => {
                if (post) {
                    req.post = post
                    return true;
                } else {
                    throw new Error('Post does not found..!!')
                }
            })
        })]
    }

    static editPost() {
        return[body('content','Content is required').isString()]
    }

    static deletePost() {
        return [param('id', 'Post id is required').custom((postId, { req }) => {
            return Post.findOne({ _id: postId }).then((post) => {
                if (post) {
                    req.post = post
                    return true;
                } else {
                    throw new Error('Post does not found..!!')
                }
            })
        })]
    }
}