import { Router } from "express";
import { PostController } from "../controller/PostController";
import { GlobalMiddleware } from "../middleware/checkError";
import { PostValidator } from "../validator/PostValidator";

class PostRouter{
    public router: Router
    constructor() {
        this.router = Router();
        this.getRoutes();
        this.postRoutes();
        this.patchRoutes();
        this.deleteRoutes();
    }
        getRoutes() {
            this.router.get('/me', GlobalMiddleware.authenticate, GlobalMiddleware.checkError, PostController.getPostbyUser)
            this.router.get('/all', GlobalMiddleware.authenticate, GlobalMiddleware.checkError, PostController.getAllPosts)
            this.router.get('/:id', GlobalMiddleware.authenticate, PostValidator.getPostById(), GlobalMiddleware.checkError, PostController.getPostById)
        }
        postRoutes() {
            this.router.post('/add',GlobalMiddleware.authenticate, PostValidator.addPost(), GlobalMiddleware.checkError, PostController.addPost)
        }
        patchRoutes() {
            this.router.patch('/edit/:id', GlobalMiddleware.authenticate, PostValidator.editPost(), GlobalMiddleware.checkError, PostController.editPost)
        }
        deleteRoutes() {
            this.router.delete('/delete/:id', GlobalMiddleware.authenticate, PostValidator.deletePost(), GlobalMiddleware.checkError, PostController.deletePost)
        }
}

export default new PostRouter().router;