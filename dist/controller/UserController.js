"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
const User_1 = require("../models/User");
const nodeMailer_1 = require("../utils/nodeMailer");
const utils_1 = require("../utils/utils");
const Jwt = require("jsonwebtoken");
const env_1 = require("../environments/env");
class UserController {
    static signUp(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const username = req.body.username;
            const email = req.body.email;
            const password = req.body.password;
            const verification_token = utils_1.Utils.generateVerificationToken();
            try {
                const hash = yield utils_1.Utils.encryptPassword(password);
                const data = {
                    email: email,
                    password: hash,
                    username: username,
                    verification_token: verification_token,
                    verification_token_time: Date.now() + new utils_1.Utils().Max_Token_Time,
                    created_at: new Date(),
                    updated_at: new Date()
                };
                let user = yield new User_1.default(data).save();
                res.send(user);
                yield nodeMailer_1.Nodemailer.sendEmail({
                    to: [`${email}`],
                    subject: 'Signup Email Verification',
                    html: `<h1>Verification Token: ${verification_token}</h1>`
                });
            }
            catch (e) {
                next(e);
            }
        });
    }
    static verify(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const verification_token = req.body.verification_token;
            const email = req.user.email;
            try {
                const user = yield User_1.default.findOneAndUpdate({
                    email: email, verification_token: verification_token,
                    verification_token_time: { $gt: Date.now() }
                }, { verified: true }, { new: true });
                if (user) {
                    res.send(user);
                }
                else {
                    throw new Error('Some thing wrong or token expired..!! ');
                }
            }
            catch (e) {
                next(e);
            }
        });
    }
    static resendverificationEmail(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const email = req.user.email;
            const verificationToken = utils_1.Utils.generateVerificationToken();
            try {
                const user = yield User_1.default.findOneAndUpdate({ email: email }, { verification_token_time: Date.now() + new utils_1.Utils().Max_Token_Time, verification_token: verificationToken });
                if (user) {
                    const mailer = yield nodeMailer_1.Nodemailer.sendEmail({
                        to: [`${email}`],
                        subject: 'Signup Email Verification',
                        html: `<h1>Verification Token: ${verificationToken}</h1>`
                    });
                    res.json({
                        success: true
                    });
                }
                else {
                    throw new Error('User does not exist ');
                }
            }
            catch (e) {
                next(e);
            }
        });
    }
    static login(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const password = req.query.password;
            const user = req.user;
            try {
                yield utils_1.Utils.comparePassword({
                    plainPassword: password,
                    encryptedPassword: user.password
                });
                const token = Jwt.sign({ email: user.email, _id: user._id }, (0, env_1.getEnvironment)().jwt_secret, { expiresIn: '120d' });
                const data = { token: token, user: user };
                res.json(data);
            }
            catch (e) {
                next(e);
            }
        });
    }
    static updatePassword(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const user_id = req.user._id;
            const password = req.body.password;
            const new_password = req.body.new_password;
            try {
                const user = yield User_1.default.findOne({ _id: user_id });
                yield utils_1.Utils.comparePassword({ plainPassword: password, encryptedPassword: user.password });
                const encrytedPassword = yield utils_1.Utils.encryptPassword(new_password);
                const newUser = yield User_1.default.findOneAndUpdate({ _id: user._id }, { password: encrytedPassword, updated_at: new Date() }, { new: true });
                res.send(newUser);
            }
            catch (e) {
                next(e);
            }
        });
    }
    static sendResetPasswordEmail(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const email = req.query.email;
            const resetPasswordToken = utils_1.Utils.generateVerificationToken();
            try {
                const updateUser = yield User_1.default.findOneAndUpdate({ email: email }, {
                    updated_at: new Date(), reset_password_token: resetPasswordToken,
                    reset_password_token_time: Date.now() + new utils_1.Utils().Max_Token_Time
                }, { new: true });
                res.send(updateUser);
                yield nodeMailer_1.Nodemailer.sendEmail({
                    to: [`${email}`],
                    subject: 'Reset password email',
                    html: `<h1>Verification Token: ${resetPasswordToken}</h1>`
                });
            }
            catch (e) {
                next(e);
            }
        });
    }
    static verifyResetPasswordToken(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            res.json({
                success: true
            });
        });
    }
    static resetPassword(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = req.user;
            const new_password = req.body.new_password;
            try {
                const encryptedPassword = yield utils_1.Utils.encryptPassword(new_password);
                const updateUser = yield User_1.default.findOneAndUpdate({ _id: user._id }, {
                    updated_at: new Date(),
                    password: encryptedPassword
                }, { new: true });
                res.send(updateUser);
            }
            catch (e) {
                next(e);
            }
        });
    }
    static updateProfilePic(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const userId = req.user;
            const fileUrl = 'http://localhost:5000/src/uploads/' + req.file.originalname;
            console.log(fileUrl);
            try {
                const user = yield User_1.default.findOneAndUpdate({ _id: userId._id }, { updated_at: new Date(), profile_pic_url: fileUrl }, { new: true });
                res.send(user);
            }
            catch (e) {
                next(e);
            }
        });
    }
    static test(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            // const user = await User.find({ email: 'nurjamanshekh01@gmail.com' }).setOptions({ explain: 'executionStats' }) // user for single field index
            const user = yield User_1.default.find({ username: 'Nurjaman Shekh', password: '$2b$10$J8r8tQ8C3EKcy43VCWLcUevQx731XLbllOoT9SY5VkYvZKBOtGg0u' }).setOptions({ explain: 'executionStats' }); //user for compound field index
            res.send(user);
        });
    }
}
exports.UserController = UserController;
