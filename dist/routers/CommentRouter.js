"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const CommentController_1 = require("../controller/CommentController");
const checkError_1 = require("../middleware/checkError");
const CommentValidator_1 = require("../validator/CommentValidator");
class CommentRouter {
    constructor() {
        this.router = (0, express_1.Router)();
        this.getRoutes();
        this.postRoutes();
        this.patchRoutes();
        this.deleteRoutes();
    }
    getRoutes() {
    }
    postRoutes() {
        this.router.post('/add/:id', checkError_1.GlobalMiddleware.authenticate, CommentValidator_1.CommentValidator.addComment(), checkError_1.GlobalMiddleware.checkError, CommentController_1.CommentController.addComment);
    }
    patchRoutes() {
        this.router.patch('/edit/:id', checkError_1.GlobalMiddleware.authenticate, CommentValidator_1.CommentValidator.editComment(), checkError_1.GlobalMiddleware.checkError, CommentController_1.CommentController.editComment);
    }
    deleteRoutes() {
        this.router.delete('/delete/:id', checkError_1.GlobalMiddleware.authenticate, CommentValidator_1.CommentValidator.deleteComment(), checkError_1.GlobalMiddleware.checkError, CommentController_1.CommentController.deleteComment);
    }
}
exports.default = new CommentRouter().router;
