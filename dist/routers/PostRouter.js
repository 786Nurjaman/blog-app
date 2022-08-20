"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const PostController_1 = require("../controller/PostController");
const checkError_1 = require("../middleware/checkError");
const PostValidator_1 = require("../validator/PostValidator");
class PostRouter {
    constructor() {
        this.router = (0, express_1.Router)();
        this.getRoutes();
        this.postRoutes();
        this.patchRoutes();
        this.deleteRoutes();
    }
    getRoutes() {
        this.router.get('/me', checkError_1.GlobalMiddleware.authenticate, checkError_1.GlobalMiddleware.checkError, PostController_1.PostController.getPostbyUser);
        this.router.get('/all', checkError_1.GlobalMiddleware.authenticate, checkError_1.GlobalMiddleware.checkError, PostController_1.PostController.getAllPosts);
        this.router.get('/:id', checkError_1.GlobalMiddleware.authenticate, PostValidator_1.PostValidator.getPostById(), checkError_1.GlobalMiddleware.checkError, PostController_1.PostController.getPostById);
    }
    postRoutes() {
        this.router.post('/add', checkError_1.GlobalMiddleware.authenticate, PostValidator_1.PostValidator.addPost(), checkError_1.GlobalMiddleware.checkError, PostController_1.PostController.addPost);
    }
    patchRoutes() {
        this.router.patch('/edit/:id', checkError_1.GlobalMiddleware.authenticate, PostValidator_1.PostValidator.editPost(), checkError_1.GlobalMiddleware.checkError, PostController_1.PostController.editPost);
    }
    deleteRoutes() {
        this.router.delete('/delete/:id', checkError_1.GlobalMiddleware.authenticate, PostValidator_1.PostValidator.deletePost(), checkError_1.GlobalMiddleware.checkError, PostController_1.PostController.deletePost);
    }
}
exports.default = new PostRouter().router;
