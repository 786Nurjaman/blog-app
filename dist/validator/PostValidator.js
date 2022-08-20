"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostValidator = void 0;
const express_validator_1 = require("express-validator");
const Post_1 = require("../models/Post");
class PostValidator {
    static addPost() {
        return [(0, express_validator_1.body)('content', 'Post content is required').isString()];
    }
    static getPostById() {
        return [(0, express_validator_1.param)('id', 'Post id is required').custom((postId, { req }) => {
                return Post_1.default.findOne({ _id: postId }).populate('comments').then((post) => {
                    if (post) {
                        req.post = post;
                        return true;
                    }
                    else {
                        throw new Error('Post does not found..!!');
                    }
                });
            })];
    }
    static editPost() {
        return [(0, express_validator_1.body)('content', 'Content is required').isString()];
    }
    static deletePost() {
        return [(0, express_validator_1.param)('id', 'Post id is required').custom((postId, { req }) => {
                return Post_1.default.findOne({ _id: postId }).then((post) => {
                    if (post) {
                        req.post = post;
                        return true;
                    }
                    else {
                        throw new Error('Post does not found..!!');
                    }
                });
            })];
    }
}
exports.PostValidator = PostValidator;
