"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const UserController_1 = require("../controller/UserController");
const checkError_1 = require("../middleware/checkError");
const utils_1 = require("../utils/utils");
const UserValidator_1 = require("../validator/UserValidator");
class UserRouter {
    constructor() {
        this.router = (0, express_1.Router)();
        this.getRoutes();
        this.postRoutes();
        this.patchRoutes();
        this.deleteRoutes();
    }
    getRoutes() {
        this.router.get('/send/verification/email', checkError_1.GlobalMiddleware.authenticate, UserController_1.UserController.resendverificationEmail);
        this.router.get('/login', UserValidator_1.UserValidators.login(), checkError_1.GlobalMiddleware.checkError, UserController_1.UserController.login);
        this.router.get('/reset/password', UserValidator_1.UserValidators.sendResetPasswordEmail(), checkError_1.GlobalMiddleware.checkError, UserController_1.UserController.sendResetPasswordEmail);
        this.router.get('/verify/resetPasswordToken', UserValidator_1.UserValidators.verifyResetPasswordToken(), checkError_1.GlobalMiddleware.checkError, UserController_1.UserController.verifyResetPasswordToken);
        this.router.get('/test', UserController_1.UserController.test);
    }
    postRoutes() {
        this.router.post('/signup', UserValidator_1.UserValidators.signUp(), checkError_1.GlobalMiddleware.checkError, UserController_1.UserController.signUp);
    }
    patchRoutes() {
        this.router.patch('/update/password', checkError_1.GlobalMiddleware.authenticate, UserValidator_1.UserValidators.updatePassword(), checkError_1.GlobalMiddleware.checkError, UserController_1.UserController.updatePassword);
        this.router.patch('/verify', checkError_1.GlobalMiddleware.authenticate, UserValidator_1.UserValidators.verifyUser(), checkError_1.GlobalMiddleware.checkError, UserController_1.UserController.verify);
        this.router.patch('/reset/password', UserValidator_1.UserValidators.resetPassword(), checkError_1.GlobalMiddleware.checkError, UserController_1.UserController.resetPassword);
        this.router.patch('/update/profilePic', checkError_1.GlobalMiddleware.authenticate, new utils_1.Utils().multer.single('profile_pic'), UserValidator_1.UserValidators.updateProfilePic(), checkError_1.GlobalMiddleware.checkError, UserController_1.UserController.updateProfilePic);
    }
    deleteRoutes() {
    }
}
exports.default = new UserRouter().router;
