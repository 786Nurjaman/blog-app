"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserValidators = void 0;
const express_validator_1 = require("express-validator");
const User_1 = require("../models/User");
class UserValidators {
    static signUp() {
        return [(0, express_validator_1.body)('email', 'Email is required').isEmail().custom((email, { req }) => {
                return User_1.default.findOne({ email: email }).then(user => {
                    if (user) {
                        throw new Error('User already exist');
                    }
                    else {
                        return true;
                    }
                });
            }),
            (0, express_validator_1.body)('password', 'Password is required').isAlphanumeric()
                .isLength({ min: 8, max: 20 }).withMessage('Password can be from 8-20 charecters only'),
            (0, express_validator_1.body)('username', 'Username is required').isString()];
    }
    static verifyUser() {
        return [(0, express_validator_1.body)('verification_token', 'Verification token is required').isNumeric()];
    }
    static updatePassword() {
        return [(0, express_validator_1.body)('password', 'Password is required').isAlphanumeric(),
            (0, express_validator_1.body)('confirm_password', 'Confirm password is required').isAlphanumeric(),
            (0, express_validator_1.body)('new_password', 'New password is required').isAlphanumeric().custom((new_password, { req }) => {
                if (new_password === req.body.confirm_password) {
                    return true;
                }
                else {
                    req.errorStatus = 422;
                    throw new Error('Confirm password does not match');
                }
            })];
    }
    static resendverificationEmail() {
        return [(0, express_validator_1.query)('email', 'Email is required').isEmail()];
    }
    static login() {
        return [(0, express_validator_1.query)('email', 'Email is required').isEmail().custom((email, { req }) => {
                return User_1.default.findOne({ email: email }).then(user => {
                    if (user) {
                        req.user = user;
                        return true;
                    }
                    else {
                        throw new Error('User does not exist..!!');
                    }
                });
            }), (0, express_validator_1.query)('password', 'Password is Required').isAlphanumeric()];
    }
    static sendResetPasswordEmail() {
        return [(0, express_validator_1.query)('email', 'Email is required').isEmail().custom((email, { req }) => {
                return User_1.default.findOne({ email: email }).then(user => {
                    if (user) {
                        return true;
                    }
                    else {
                        throw new Error('Email does not exist..!!');
                    }
                });
            })];
    }
    static verifyResetPasswordToken() {
        return [(0, express_validator_1.query)('reset_password_token', 'Reset password token is required').isNumeric().custom((token, { req }) => {
                return User_1.default.findOne({ reset_password_token: token, reset_password_token_time: { $gt: Date.now() } }).then((user) => {
                    if (user) {
                        return true;
                    }
                    else {
                        throw new Error('Token does not exist please request new one');
                    }
                });
            })];
    }
    static resetPassword() {
        return [(0, express_validator_1.body)('email', 'Email is required').isEmail().custom((email, { req }) => {
                return User_1.default.findOne({ email: email }).then(user => {
                    if (user) {
                        req.user = user;
                        return true;
                    }
                    else {
                        throw new Error('User does not exist..!!');
                    }
                });
            }), (0, express_validator_1.body)('new_password', 'New password is required').isAlphanumeric().custom((newPassword, { req }) => {
                if (newPassword === req.body.confirm_password) {
                    return true;
                }
                else {
                    throw new Error('Confirm password and new password does not match');
                }
            }),
            (0, express_validator_1.body)('confirm_password', 'Confirm password is required').isAlphanumeric(),
            (0, express_validator_1.body)('reset_password_token', 'Token is required').isNumeric().custom((token, { req }) => {
                if (Number(req.user.reset_password_token) === Number(token)) {
                    return true;
                }
                else {
                    req.errorStatus = 422;
                    throw new Error('Reset password token is invalid. Please try again..!');
                }
            })];
    }
    static updateProfilePic() {
        return [(0, express_validator_1.body)('profile_pic').custom((profilePic, { req }) => {
                if (req.file) {
                    return true;
                }
                else {
                    throw new Error("File not uploaded.!!");
                }
            })];
    }
}
exports.UserValidators = UserValidators;
