"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommentValidator = void 0;
const express_validator_1 = require("express-validator");
const Post_1 = require("../models/Post");
const Comments_1 = require("../models/Comments");
class CommentValidator {
    static addComment() {
        return [(0, express_validator_1.body)('content', 'Comment is required').isString(),
            (0, express_validator_1.param)('id', 'Post id is required').custom((postId, { req }) => {
                return Post_1.default.findOne({ _id: postId }).then((post) => {
                    if (post) {
                        req.post = post;
                        return true;
                    }
                    else {
                        throw new Error('Post does not exist..!!');
                    }
                });
            })];
    }
    static editComment() {
        return [(0, express_validator_1.body)('content', 'Content is required').isString()];
    }
    static deleteComment() {
        return [(0, express_validator_1.param)('id', 'Comment id is required').custom((commentId, { req }) => {
                return Comments_1.default.findOne({ _id: commentId }).then((comment) => {
                    if (comment) {
                        req.comment = comment;
                        return true;
                    }
                    else {
                        throw new Error('Comment does not exist..!!');
                    }
                });
            })];
    }
}
exports.CommentValidator = CommentValidator;
