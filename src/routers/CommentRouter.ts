import { Router } from "express";
import { CommentController } from "../controller/CommentController";
import { GlobalMiddleware } from "../middleware/checkError";
import { CommentValidator } from "../validator/CommentValidator";


class CommentRouter {
    public router: Router
    constructor() {
        this.router = Router();
        this.getRoutes()
        this.postRoutes()
        this.patchRoutes()
        this.deleteRoutes()
    }
    getRoutes() {

    }
    postRoutes() {
        this.router.post('/add/:id',GlobalMiddleware.authenticate, CommentValidator.addComment(), GlobalMiddleware.checkError, CommentController.addComment )
    }
    patchRoutes() {
        this.router.patch('/edit/:id', GlobalMiddleware.authenticate, CommentValidator.editComment(), GlobalMiddleware.checkError, CommentController.editComment)
    }
    deleteRoutes() {
        this.router.delete('/delete/:id', GlobalMiddleware.authenticate, CommentValidator.deleteComment(), GlobalMiddleware.checkError, CommentController.deleteComment)
    }
}

export default new CommentRouter().router;